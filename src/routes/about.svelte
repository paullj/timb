<script context="module">
	export const prerender = true;
</script>

<p>
  create music in 64 bytes. heavily inspired by <a href="https://tixy.land">tixy.land</a>
</p>
<h2>
  // what does `f(b,i)` do?
</h2>
<p>
  `f(b,i)` allows you to write music in semitones, it returns a frequency given a base frequency and how many semitones difference you want
</p>
<h2>
  // what about `r(o,p)`?
</h2>
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
<ul>
  <li>
    simple example
    <br>
    r(1,4) |x...|
  </li>
  <li>
    bulgarian folk rhythm 'ruchenitza'. used in pink floyd's money
    <br>
    r(3,7) |x.x.x..|
  </li>
  <li>
    cuban tresillo pattern
    <br>
    r(3,8) |x . . x . . x .| 
  </li>
  <li>
    spanish tango when started on second offset 
    <br>
    r(5,8) |x . x x . x x .| 
  </li>
  <li>
    arabic rhythm 'agsag-samai' and s. african drum pattern 'venda'
    <br>
    r(5,9) [x . x . x . x . x]
  </li>
  <li>
    bossa-nova rhythm necklace of brazil
    <br>
    r(5,16) x . . x . . x . . x . . x . . . .] 
  </li>
</ul>
<p>
  you can read more about it <a href="http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf">here</a>
</p>
