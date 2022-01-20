<script context="module">
	export const prerender = true;
</script>

<div class="container">
  <p>
    create music in 64 bytes. heavily inspired by 
    <a href="https://tixy.land">tixy.land</a>
  </p>

  <hr>

  <div>
    <h1>
      // what does `f(b,i)` do?
    </h1>
    `f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want
  </div>
  <h1>
    // what about `r(o,p)`?
  </h1>
  <p>
    `r(o,p)` helps build euclidean rhythm patterns. it spreads out `o` onsets across `p` pulses. it returns an array of 0 or 1 where 1 can be used as when a beat hits.
    it can build very complex rhythms in a simple way.
  </p>
  <p>
    for example, the 13th century persian rhythm 'khafif-e-ramal' below can be generated using r(2,5). coincidentally it is also the metric pattern from dave brubeck's take five and gustav holst's mars from the planets
  </p>
  <p>
    r(2,5)=[1,0,0,0] or |x...| in beat notation
  </p>
  <p>
    other examples: 
  </p>
  <pre>
  simple example
    r(1,4) |x...| 
  bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    r(3,7) |x.x.x..| 
  cuban tresillo pattern 
    r(3,8) |x . . x . . x .| 
  spanish tango when started on second offset 
    r(5,8) |x . x x . x x .| 
  arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    r(5,9) [x . x . x . x . x] 
  bossa-nova rhythm necklace of Brazil
    r(5,16) x . . x . . x . . x . . x . . . .] 
  </pre>
  you can read more about it <a href="http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf">here</a>
</div>

<style>
  .container {
    width: 64ch;
    padding-bottom: 200px;;
  }
  h1 {
    font-size: 14px;
    color: red;
  }
</style>