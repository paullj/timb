import { PolySynth, MetalSynth, Filter } from "tone";

export default class HiHat {
  constructor() {
    const highPass = new Filter(10000, "bandpass");
    const synth = new PolySynth(MetalSynth, {
      volume: -12,
      envelope: {
        attack: 0.001,
        decay: 0.13,
        sustain: 0,
        release: 0.1,
      },
    }).connect(highPass);

    this.synth = synth;
    this.highPass = highPass;
  }

  connect(destination) {
    this.highPass.connect(destination);
    return this;
  }

  trigger(time) {
    this.synth.triggerAttackRelease(1000, "16n", time);
  }
}
