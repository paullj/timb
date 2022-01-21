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

  $: gain = (volumeLevel+1)/4;
  $: Tone.getDestination().mute = mute;
  $: Tone.getDestination()?.volume?.rampTo(Tone.gainToDb(gain, 0.25));
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
    
    Tone.getDestination().volume.set({ value: Tone.gainToDb(gain) });
    
    const sineSynth = new Tone.PolySynth();
    const squareSynth = new Tone.PolySynth();
    const clickSampler = new Tone.Sampler({
      urls: {
        "C3": "/click.mp3",
      },
      release: 1,
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
    clickSampler.connect(Tone.getDestination());
    
    time = Tone.now();

    Tone.Transport.scheduleRepeat((t) => {
      time = t;
      let notes = getFrequencies(t, measure * beatsPerMeasure + beat, measure, beat);
      if(Array.isArray(notes)) {
        notes.forEach(n => {
          if(n === 0)
            clickSampler.triggerAttackRelease("C3", "16n")
          else if(n > 0) {
            sineSynth.triggerAttackRelease(clamp(n,1,MAX_FREQ), "8n"); 
          } else {
            squareSynth.triggerAttackRelease(clamp(Math.abs(n),1,MAX_FREQ), "8n"); 
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
		try {
			getFrequencies = new Function('t', 'i', 'm', 'b', `
			try { 
        with (Math)
          return [${code}].flat().splice(0,4).map(n => Number.parseFloat(n)).filter(n => n != null && !Number.isNaN(n));
			} catch(error){
				return [0];
			}`);
		} catch(error) {
			getFrequencies = () => [0];
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
    return x === 0 ? 
      (2-expoOut(indicatorScale)**2)/1.75 :
      expoIn(1-Math.abs(x / MAX_FREQ)) * (1-indicatorScale/2);
  }
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
  <button disabled={measure+beat === 0 && !isPlaying} on:click|preventDefault={async () => {
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
    volume ({gain.toFixed(2)})
  </button>
</form>

<div class="container" style="--beats: {beatsPerMeasure}; --meausures: {totalMeasures}" on:click={() => exampleIndex = (exampleIndex + 1) % examples.length}>
  {#each { length: totalMeasures } as _, m}
    {#each { length: beatsPerMeasure } as _, b}
      {@const current = measure * beatsPerMeasure + beat}
      {@const offset = m * beatsPerMeasure + b}
      {@const frequencies = getFrequencies(time+offset*0.25, offset, m, b).sort((a,b)=>b-a)}
      <div class="beat" class:indicator={current === offset}>
        {#each { length: frequencies.length || 0 } as _, f}
          {#if frequencies[f] != null && !Number.isNaN(frequencies[f])}
            <div class="note" class:overlay={f > 0} 
              class:click={frequencies[f] === 0}
              class:triangle={frequencies[f] < 0}
              style="--index:{f}; --scale:{scale(frequencies[f], current-offset)};"/>
          {:else}
            <div class="note rest"></div>
          {/if}
        {/each}
      </div>
	  {/each}
	{/each}
</div>

<form class="editor" on:submit|preventDefault={()=>{ saveToURL() }}>
  <label for="code" class="comment focus-only">// hit `enter` to save your code in the URL</label>
  <label for="code" class="comment focus-only">// to learn more click on the dots above or <a href="{base}/about">here</a></label>
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
  .note.triangle {
    background-color: red;
    border-color: red;
  }
  .note.click {
    background-color:blue;
    border-color: blue;
  }
  .note.triangle.overlay,
  .note.click.overlay {
    opacity: 0.85;
  }
  .note.triangle.overlay + .note.triangle.overlay,
  .note.click.overlay + .note.click.overlay{
    opacity: 0.3;
  }
  .indicator > .note:not(.overlay) {
    border-width: 5px; 
    background: transparent;
  }
  .note.rest {
    display: none;
    border-width: 0px;
    background: transparent;
  }
</style>