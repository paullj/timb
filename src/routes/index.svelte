<script>
  import { onMount } from 'svelte';
  import * as Tone from 'tone';
  import { expoOut, expoIn } from 'svelte/easing';
  import examples from '$lib/examples';
  import { base } from '$app/paths';
  import { page } from '$app/stores'

  const MAX_FREQ = 10000;

  let beatsPerMeasure = 8;
  let totalMeasures = 8;

  let time = 0;
  let measure = 0;
  let beat = 0;
  
  let hasStarted = false;
  let isPlaying = false;
  let mute = false;
  let volumeLevel = 0;
  
  let muteTimeout;
  $: gain = (volumeLevel+1)/8;
  $: {
    muteTimeout && clearTimeout(muteTimeout);
    Tone.getDestination()?.volume?.rampTo(Tone.gainToDb(mute ? 0 : gain), 0.3)
    muteTimeout = setTimeout(() => Tone.getDestination().mute = mute, 300);
  }
  $: Tone.getDestination()?.volume?.rampTo(Tone.gainToDb(gain), 0.3);
  $: {
    code = examples[exampleIndex].code;
    comments = examples[exampleIndex].comments ?? [];
  }

	onMount(() => {
    loadFromURL();
    
    window.f = (b, n) => b*(1.059463**n);
    window.r = (o, t) => {
      var previous = null;
      var pattern = [];

      for (var i = 0; i < t; i++) {
        var xVal = Math.floor((o  / t) * i);
        pattern.push(xVal === previous ? 0 : 1);
        previous = xVal;
      }
      return pattern;
    }
    
    const sineSynth = new Tone.PolySynth();
    const squareSynth = new Tone.PolySynth();
    const drumSampler = new Tone.Sampler({
      urls: {
        "C3": "/kick.mp3",
        "C4": "/snare.mp3",
        "C5": "/hat.mp3",
      },
      baseUrl: base,
    });
    
    squareSynth.set({
      oscillator: { type: "sine"},
      envelope: { attack: 0.2, decay: 0.5, release: 1 }
    });
    squareSynth.set({
      detune: 0.1,
      volume: Tone.gainToDb(0.2),
      oscillator: { type: "square"},
      envelope: { attack: 0.05, decay: 0.1 }
    });
    sineSynth.connect(Tone.getDestination());
    squareSynth.connect(Tone.getDestination());
    drumSampler.connect(Tone.getDestination());
    
    time = Tone.now();

    Tone.Transport.scheduleRepeat((t) => {
      time = t;
      let notes = getFrequencies(t, measure * beatsPerMeasure + beat, measure, beat);
      if(Array.isArray(notes)) {
        notes.forEach(note => {
          if(isDrum(note)) {
            if(note > 0)
              drumSampler.triggerAttackRelease("C5", "16n")
            else if(note < 0)
              drumSampler.triggerAttackRelease("C4", "16n")
            else
            drumSampler.triggerAttackRelease("C3", "16n")
          } else if(note > 0) {
            sineSynth.triggerAttackRelease(clamp(note,1,MAX_FREQ), "8n"); 
          } else {
            squareSynth.triggerAttackRelease(clamp(Math.abs(note),1,MAX_FREQ), "8n"); 
          }
        });
      }

      measure = (measure + Math.floor((beat + 1) / beatsPerMeasure)) % totalMeasures;
      beat = (beat + 1) % beatsPerMeasure;
    }, "8n");
	})

  let exampleIndex = 0;
  let comments = examples[0].comments;
  let code = examples[0].code;

	let getFrequencies;
  $: {
    getFrequencies = (t,i,m,b) => {   
      try {
        const codeFunc = new Function('t', 'i', 'm', 'b', `
          try { 
            with (Math)
              return [${code}];
          } catch(error){
            return [NaN];
          }`);
        return codeFunc(t,i,m,b).flat()
          .splice(0,4)
          .map(n => Number.parseFloat(n))
          .filter(n => !isRest(n));
        } catch(error) {
          return [NaN];
      }
		}
	}

  function clamp (value, min, max){
    return Math.min(Math.max(value, min), max);
  }

  const saveToURL = () =>{
    let query = new URLSearchParams($page.url.searchParams.toString());
    query.set("code", code);
    history.pushState(null, '', `?${query.toString()}`);
    
  }
  const loadFromURL = () => {
    if($page.url.searchParams.has("code"))
      code = $page.url.searchParams.get("code");
    if($page.url.searchParams.has("bpm")) 
      Tone.Transport.bpm.value = clamp($page.url.searchParams.get("bpm"), 1, 500);
  }
  const scale = (x, o) => {
    const indicatorScale = Math.abs(o/(totalMeasures*beatsPerMeasure));
    return isDrum(x) ? 
      (2-expoOut(indicatorScale)**2)/1.75 * (x===0?1:x>0?0.5:0.8) :
      expoIn(1-Math.abs(x / MAX_FREQ)) * (1-indicatorScale/2);
  }
  const isRest = (frequency) => Number.isNaN(frequency) || frequency == null; 
  const isDrum = (frequency) => frequency === 0 || !Number.isFinite(frequency);
</script>

<form class="controls">
  <button on:click|preventDefault={async () => {
    if(!hasStarted) {
      await Tone.start();
      hasStarted = true;
      console.log('Audio is ready!');
    }
    isPlaying = Tone.Transport.toggle().state === 'started'
  }}>
    {#if isPlaying}
      pause
    {:else}
      play
    {/if}
  </button>
  <button disabled={measure+beat === 0 && !isPlaying} on:click|preventDefault={() => {
    Tone.Transport.stop();
    isPlaying = false;
    measure = beat = 0;
  }}>
    stop
  </button>
  <button class="mute-button" class:active={mute} on:click|preventDefault={() => mute = !mute}>
    {!mute ? "mute" : "unmute"}
  </button>
  <button class="mute-button" class:active={mute} disabled={mute} on:click|preventDefault={() => volumeLevel = (volumeLevel+1)%4}>
    volume ({(2*gain).toFixed(2)})
  </button>
</form>

<div class="container" style="--beats: {beatsPerMeasure}; --meausures: {totalMeasures}" on:click={() => exampleIndex=Math.min(exampleIndex+1,examples.length-1)}>
  {#each { length: totalMeasures } as _, m}
    {#each { length: beatsPerMeasure } as _, b}
      {@const now = measure * beatsPerMeasure + beat}
      {@const index = m * beatsPerMeasure + b}
      {@const notes = getFrequencies(time+(now-index)*0.25, index, m, b).sort((a,b)=>{
        if(isDrum(a)) a=0;
        if(isDrum(b)) b=0;
        return b-a;
      })}

      <div class="beat" class:indicator={now === index}>
        {#each { length: notes.length || 0 } as _, i}
          {@const note = notes[i]}
            <div class="note" class:overlay={i > 0} 
              class:drum={isDrum(note)}
              class:square={note < 0 && !isDrum(note)}
              style="--index:{i}; --scale:{scale(notes[i], now-index)};"/>
        {:else}
          <div class="note rest"></div>
        {/each}
      </div>
	  {/each}
	{/each}
</div>

<form class="editor" on:submit|preventDefault={saveToURL}>
  <label for="code" class="comment focus-only">// hit `enter` to save your code in the URL</label>
  <label for="code" class="comment focus-only">// click on the dots above or go to <a id="about" href="{base}/about">/about</a> for more info</label>
  {#each comments as line}
    <label for="code" class="comment">// {line}</label>
  {/each}
  
  <label id="label" for="code">(t,i,m,b) =&gt;</label>
  <input id="input" name="code" type="text" spellcheck="false" autocomplete="off" bind:value={code} maxlength="64"/>
</form>

<style>
  .controls {
    width: 100%;
    display: grid;
    justify-items: left;
    grid-template-columns: 7ch 7ch 7ch auto;
  }
  .editor {
    margin-top: 150px;
  }
  .comment {
    color: red;
  }
  .comment::selection {
    background: red;
    color: black;
  }
  .comment.focus-only {
    display: none;
  }
  .editor:focus-within > .comment.focus-only{
    display: block;
  }
 .editor:focus-within > .comment{
    display: none;
  }
  .container {
    cursor: pointer;
		display: grid;
		grid-template-columns: repeat(calc(2 * var(--beats)), auto);
		grid-template-rows: repeat(var(--measures), auto);
		margin: 10px 0px;
    width: auto;
    height: auto;
	}
  .beat {
    position: relative;
    width: 4ch;
    height: calc(64ch / 16);
  }
  .note {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: white solid 0px;
    background: white;
    box-sizing: border-box;
    z-index: 10;
    transform: scale(var(--scale));
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
  .note.overlay {
    z-index: calc(10 - var(--index));
    background: white;
    margin: calc(var(--index) * 5px);
    opacity: 0.5;
  }
  .note.square {
    background-color: red;
    border-color: red;
  }
  .note.drum {
    background-color:blue;
    border-color: blue;
  }
  .note.square.overlay,
  .note.drum.overlay {
    opacity: 0.85;
  }
  .note.square.overlay + .note.square.overlay,
  .note.drum.overlay + .note.drum.overlay{
    opacity: 0.3;
  }
  .indicator > .note:not(.overlay) {
    border-width: 5px; 
    background: transparent;
  }
  .note.rest {
    display: none;
    border-width: 0px;
    background: tra
  }
  #about {
    color:black;
    background: red;
  }
   #about:hover {
    color: white;
    background: blue;
   }
</style>