import { MembraneSynth } from "tone";

export default class Kick {
  constructor() {
    const membrane = new MembraneSynth({
      volume: 0,
      pitchDecay: 0.2,
      octaves: 2.0,
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.001,
        decay: 0.3,
        sustain: 0.01,
        release: 0.1,
        attackCurve: "linear",
      },
    });

    this.membrane = membrane;
  }

  connect(destination) {
    this.membrane.connect(destination);
    return this;
  }

  trigger(time) {
    this.membrane.triggerAttackRelease("C1", "8n", time);
  }
}
