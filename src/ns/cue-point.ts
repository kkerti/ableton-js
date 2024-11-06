import { Ableton } from "..";
import { Namespace } from ".";

export interface GettableProperties {
  name: string;
  time: number;
}

export interface TransformedProperties {}

export interface SettableProperties {}

export interface ObservableProperties {
  name: string;
  time: number;
}

export interface RawCuePoint {
  id: string;
  name: string;
  time: number;
}

export class CuePoint extends Namespace<
  GettableProperties,
  TransformedProperties,
  SettableProperties,
  ObservableProperties
> {
  constructor(ableton: Ableton, public raw: RawCuePoint) {
    super(ableton, "cue-point", raw.id);
  }

  async jump() {
    return this.sendCommand("jump");
  }
}
