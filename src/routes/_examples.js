const examples = [
  {
    comments: [
      "timb(re) - THINK OF A NICE ONE LINE DESC",
      "click play and then on the dots above to see/hear more!",
    ],
    code: "[[0,4,7,9].map(n=>f(220,n))[m%2+b%3],[55,69][r(1,5)[i%5]]]",
  },
  {
    comments: [
      "each dot is a beat, to play a note",
      "return a frequency from 20-20000 hz",
    ],
    code: "440",
  },
  {
    comments: [
      "`m` is the current measure (0-7)",
      "and `b`, the beat in the current mesasure (0-7)",
    ],
    code: "(1+m%2)*110*[1,2,3,4][b%4]",
  },
  {
    comments: ["`t` is time", "and `i` is index (0-63)"],
    code: "440+t*[0,1,2,1][i%4]",
  },
  {
    comments: [
      "NaN and other non number values are rest notes",
      "this allows for intesting rhythms",
    ],
    code: "440*[2,1,1,NaN,1,1,NaN,1][i%8]",
  },
  {
    comments: [
      "returning an array plays all frequencies as a chord",
      "there is max polyphony of 4",
    ],
    code: "[[440,220,110],[220,110,880]][m%2]",
  },
  {
    comments: [
      "`f(b,i)` gives you `i` semitones from base frequency `b`",
      "440Hz is A4. MAKE THIS BETTER",
    ],
    code: "[0,3,5,7].map(n=>f(440,n))[b%4]",
  },
  {
    comments: [
      "`r(o,t)` gives indexes for euclidean rhythm patterns",
      "EXPLAIN THIS BETTER goto /about for more",
    ],
    code: "[NaN,440][r(3,8)[b]]",
  },
  {
    comments: [
      "`Math` functions are available in scope",
      "more room for creativity WRITE SOMETHING INTERESTING",
    ],
    code: "440+110*sin(t)+220*cos(2*t)",
  },
  {
    comments: [
      "an attempt at twinkle twinkle little star",
      "can you make it nicer/smaller/better?",
    ],
    code: "[...'0077997~5544220~7755442~7755442~'].map(n=>f(440,n))[i%32]",
  },
  {
    comments: [
      "now its your turn",
      "remember that you are limited to 64 bytes",
    ],
    code: "'HAVE FUN :)'",
  },
];

export default examples;
