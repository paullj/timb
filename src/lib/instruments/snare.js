import { Filter, NoiseSynth, MembraneSynth } from "tone";

export default class Snare {
  constructor() {
    const lowPass = new Filter({
      frequency: 11000,
      type: "lowpass",
    });

    const noise = new NoiseSynth({
      volume: -8,
      noise: {
        type: "pink",
        playbackRate: 3,
      },
      envelope: {
        attack: 0.001,
        decay: 0.13,
        sustain: 0,
        release: 1,
      },
    }).connect(lowPass);

    const membrane = new MembraneSynth({
      volume: -12,
      pitchDecay: 0.05,
      octaves: 10,
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.001,
        decay: 1,
        sustain: 0.4,
        release: 1.5,
        attackCurve: "exponential",
      },
    });

    this.noise = noise;
    this.lpf = lowPass;
    this.membrane = membrane;
  }

  connect(destination) {
    this.membrane.connect(destination);
    this.lpf.connect(destination);
    return this;
  }

  trigger(time) {
    this.noise.triggerAttackRelease("8n", time);
    this.membrane.triggerAttackRelease(30, "8n", time);
  }
}
