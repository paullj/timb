<script>
  import { onMount } from 'svelte';
  import * as Tone from 'tone';
  import { circIn } from 'svelte/easing';
  
  import examples from './_examples';

  const MIN_FREQ = 20;
  const MAX_FREQ = 20000;
  const BEATS_PER_MEASURE = 8;
  const TOTAL_MEASURES = 8;

  let time = 0;
  let measure = 0;
  let beat = 0;
  
  let isPlaying = false;
  let mute = false;
  let volume = 0.1;
  
  $: Tone.getDestination().mute = mute;
  $: Tone.getDestination()?.volume?.rampTo(Tone.gainToDb(volume), 0.05);
  $: {
    code = examples[exampleIndex].code;
    comments = examples[exampleIndex].comments ?? [];
  }
  let synth;

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

    Tone.getDestination().volume.set({ value: Tone.gainToDb(volume) });
    
    synth = new Tone.PolySynth().toDestination();
    synth.set({ envelope: { attack: 0.1, decay: 0.5 } });
    synth.connect(Tone.getDestination());
    
    Tone.Transport.scheduleRepeat((t) => {
      let notes = getFrequencies(t, measure * BEATS_PER_MEASURE + beat, measure, beat);
      if(Array.isArray(notes)) {
        notes = notes.splice(0,4).map(n => clamp(Number.parseFloat(n), MIN_FREQ, MAX_FREQ)).filter(n=>!Number.isNaN(n));
        if(notes.length)
          synth.triggerAttackRelease(notes, "8n"); 
      } else {
        let note = Number.parseFloat(notes);
        if(!Number.isNaN(note)) {
          synth.triggerAttackRelease(clamp(note, MIN_FREQ, MAX_FREQ), "8n"); 
        }
      }

      measure = (measure + Math.floor((beat + 1) / BEATS_PER_MEASURE)) % TOTAL_MEASURES;
      beat = (beat + 1) % BEATS_PER_MEASURE;
    }, "8n");

		let id = requestAnimationFrame(update);

		function update() {
			id = requestAnimationFrame(update);
      time = Tone.now();
		}
		return () => cancelAnimationFrame(id);
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
          return [${code}].flat()
			} catch(error){
				return [0];
			}`);
		} catch(error) {
			getFrequencies = () => [0];
		}
	}
  const test = Array(TOTAL_MEASURES).fill().map((_,m) => Array(BEATS_PER_MEASURE).fill().map((_,b) => 
    Math.sqrt(((BEATS_PER_MEASURE-b)/BEATS_PER_MEASURE)**2 + ((TOTAL_MEASURES-m)/TOTAL_MEASURES)**2)));

	function scale(freq, dm, db) {
    // const isNaN = freq == null || Number.isNaN(freq);
		// freq = clamp((MAX_FREQ-freq)/(MAX_FREQ-MIN_FREQ),0,1);
    // freq = isNaN ? 1 : 1-Math.E ** (-freq*5); 
    // const dist = test[Math.abs(dm)][Math.abs(db)] / 2;
    
		// return freq;
    // return 1-Math.E **(-((MAX_FREQ-freq)/(MAX_FREQ-MIN_FREQ))*5);
    return circIn(1-(freq-MIN_FREQ) / (MAX_FREQ-MIN_FREQ));
	}

  function clamp (value, min, max){
    return Math.min(Math.max(value, min), max);
  }

  const saveToURL = () => history.pushState(null, '', `#${encodeURIComponent(code)}`);
  const loadFromURL = () => {
    if(location.hash)
      code = decodeURIComponent(location.hash.slice(1));
  }
</script>

<form>
  <button on:click|preventDefault={async () => {
    await Tone.start();
	  console.log('audio is ready');
    isPlaying = Tone.Transport.toggle().state === 'started'
  }}>
    {#if isPlaying}
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5.5 3v9m4-9v9" stroke="currentColor"></path></svg>
    {:else}
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.5 12.5v-10l7 5-7 5z" stroke="currentColor" stroke-linejoin="round"></path></svg>
    {/if}
  </button>
  <button class="mute-button" class:active={mute} on:click|preventDefault={() => mute = !mute}>
    {#if volume >= 0.65}
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1zm2-2v11h1V2h-1z" fill="currentColor"></path></svg>
    {:else if volume >= 0.35}
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1zm2-2v7h1V4h-1z" fill="currentColor"></path></svg>
    {:else}
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm-5-3.498h-2v1h2v-1zm-2 0a.5.5 0 01-.5-.5H0c0 .83.672 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997a.5.5 0 01.5-.499v-1a1.5 1.5 0 00-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zM10 6v3h1V6h-1z" fill="currentColor"></path></svg>
    {/if}
  </button>
  <input type="range" name="" step="0.05" min=0.0 max=1.0 bind:value={volume} disabled={mute} id="">
</form>

<div class="container" style="--beats: {BEATS_PER_MEASURE}; --meausures: {TOTAL_MEASURES}" on:click={() => exampleIndex = (exampleIndex + 1) % examples.length}>
  {#each { length: TOTAL_MEASURES } as _, m}
    {#each { length: BEATS_PER_MEASURE } as _, b}
      {@const current = measure * BEATS_PER_MEASURE + beat}
      {@const offset = m * BEATS_PER_MEASURE + b}
      {@const frequencies = getFrequencies(time, offset, m, b).sort((a,b)=>b-a)}
  
      <div class="beat" class:indicator={current === offset}>
        {#each { length: frequencies.length || 0 } as _, f}
          {#if frequencies[f] === null || Number.isNaN(frequencies[f])}
            <div class="note rest"></div>
          {:else}
            <div class="note" class:overlay={f > 0} 
              style="--index:{f}; --scale:{scale(frequencies[f])};"/>
          {/if}
          <!-- scale(frequencies[f],m-measure,b-beat) -->
            <!--  style={styleFromValue(frequencies, m-measure, b-beat)} -->
        {/each}
      </div>
	  {/each}
    <div></div>
	{/each}
</div>

<form class="editor" on:submit|preventDefault={()=>{ saveToURL() }}>
  {#each comments as line}
    <label for="code" class="comment">// {line}</label>
  {/each}
  <label for="code" class="comment focused">// hit `enter` to save your tune in the URL</label>
  <label for="code" class="comment focused">// to learn more about what you can do click here</label>

  <label id="label" for="input">(t,i,m,b) =&gt;</label>
  <input id="input" name="code" type="text" spellcheck="false" autocomplete="off" bind:value={code} />  
</form>

<style>
  button {
    background: transparent;
    font: inherit;
    color: inherit;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
  button svg {
    width: 100%;
    height: 100%;
  }
  button:hover {
    color: red;
  }
  .mute-button.active{
    color: red;
  }
  .editor {
      display: block;
      line-height: 1.2em;
      background: transparent;
  }
  .editor > label {
      display: block;
      font: inherit;
  }
  .editor > label.comment {
      color: red;
  }
  .editor > label.comment.focused{
    display:none
  }

  .editor > input {
      background: transparent;
      font: inherit;
      color: inherit;
      border: none;
      width: 64ch;
      box-sizing: content-box;
      border: 0;
      outline: 0;
  }
  .container {
    cursor: pointer;
		display: grid;
		grid-template-columns: repeat(calc(var(--beats)), auto) 10px repeat(calc(var(--beats)), auto) 0px;
		grid-template-rows: repeat(var(--measures), auto);
		margin: 20px 0px;
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
    width: 90%;
    height: 90%;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: white solid 0px;
    background: white;
    box-sizing: border-box;
    z-index: 10;
    transform: scale(var(--scale));
  }
  .note.overlay {
    z-index: calc(10 - var(--index));
    background: white;
    margin: calc(var(--index) * 5px);
    opacity: 0.35;
  }
  .indicator > .note {
    /* background-color: red; */
    /* border-color: #ff0000; */
    border-width: 5px; 
    background: transparent;
  }
  .note.rest {
    /* --scale: 0.8; */
    border-width: 0px;
    background: transparent;
  }

</style>