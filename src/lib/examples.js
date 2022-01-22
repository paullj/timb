const examples = [
  {
    comments: [
      "timb(re) - musical creative coding",
      "click play and then on the dots above to hear more!",
    ],
    code: "[[220,277,330,370][m%2+b%3],55*(r(3,8)[b]-1),110*(1+m%2),1/0]",
  },
  {
    comments: [
      "each dot is a beat, to play a note",
      "return a frequency from 1 to 10000 hz",
    ],
    code: "440",
  },
  {
    comments: [
      "frequencies greater than 0 play a triangle wave",
      "while negative frequencies play a sawtooth wave",
    ],
    code: "-440",
  },
  {
    comments: [
      "return 0 for a kick drum",
      "infinity for hi hats and negative infinity for snare",
    ],
    code: "0",
  },
  {
    comments: [
      "`m` is the current measure (0-7)",
      "and `b`, the beat in the current mesasure (0-7)",
    ],
    code: "(1 + m % 2) * 110 * [1, 2, 3, 4][b % 4]",
  },
  {
    comments: ["`t` is for time", "and `i` is index (0-63)"],
    code: "20 * (t % 50) * [1, 2, 3, 2][i % 4]",
  },
  {
    comments: [
      "NaN, undefined and other non number values are rest notes",
      "this allows for coding intesting rhythms",
    ],
    code: "440 * [2, 1, NaN, 1][i % 4]",
  },
  {
    comments: [
      "returning an array plays all frequencies as a chord",
      "you can play a maximum of 4 notes at the same time",
    ],
    code: "[[261.63, 329.628, 391.995], NaN][b % 4]",
  },
  {
    comments: [
      "`f(b,i)` gives you `i` semitones from base frequency `b`",
      "this is useful for making western tonal music (440Hz is a4)",
    ],
    code: "[0, 4, 7, 4, 2, -2, 5, 4].map(n => f(440, n))[b % 8]",
  },
  {
    comments: [
      "`r(o,p)` returns euclidean rhythms as an array of 0s and 1s",
      "it spreads out `o` onsets across `p` pulses (more on /about)",
    ],
    code: "[NaN, 0][r(3, 8)[b]]",
  },
  {
    comments: [
      "no need for `Math.`, math functions are available in scope",
      "this gives you more room for creativity",
    ],
    code: "110 * sin(t) + 220 * cos(2 * t)",
  },
  {
    comments: [
      "here is my attempt at twinkle twinkle little star",
      "can you make it nicer/smaller/better?",
    ],
    code: "[...'0077997~5544220~7755442~7755442'].map(n=>f(440,n))[i%32]",
  },
  {
    comments: [
      "you are limited to 64 bytes, use creative ways to shorten",
      "eg. `b^0` is equivalent to `b!=0`, every byte counts!",
    ],
    code: "b^0?440:-220",
  },
  {
    comments: [" more examples:", "a nice chord progression in c major"],
    code: "[0,5,7,2].map(n=>[0,16,7,12].map(x=>f(131,n+x)))[[1][i%2]*m%4]",
  },
  {
    comments: [
      "how about some drums?",
      "`1/0` is equal to infinity, useful for hi-hats and snares",
    ],
    code: "[[,0][r(2+m%2,8)[b]],[-1/0][(b+2)%4],1/0,-10*(4+m%2)]",
  },
  {
    comments: [
      "you can use `random()` to add probability to you music",
      "combine it with logic operators to add variation to beats",
    ],
    code: "[(b%4^0&&random()>.1)*-90,-(m%3+1)*30*[1,2,3][b%3],[360][b%5]]",
  },
  {
    comments: ["now its your turn", "have fun!"],
    code: "'*your next masterpiece*'",
  },
];

export default examples;
