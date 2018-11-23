import * as chord from "./chord";
import * as scale from "./scale"; 
import * as melody from "./melody"; 
import * as utils from "./utils";
import * as rhythm from "./rhythm"
import * as make from "./generator";

import { SCALE_PATTERNS } from "./scale";

import {
    CHORD_SEMITONE_PATTERNS,
    CHORD_SCALE_PATTERNS,
    SEMITONES_IN_OCTAVE,
    MIDI_MIDDLE_C,
    DEFAULT_SCALE_RANGE,
    MAJOR,
    SCALE_SIZE_IN_STEPS,
    SONG_PARTS
} from "./constants";

export {
    make,
    chord, 
    scale, 
    utils, 
    melody,
    rhythm,
    CHORD_SEMITONE_PATTERNS,
    CHORD_SCALE_PATTERNS,
    SEMITONES_IN_OCTAVE,
    MIDI_MIDDLE_C,
    DEFAULT_SCALE_RANGE,
    MAJOR,
    SCALE_SIZE_IN_STEPS,
    SONG_PARTS,
    SCALE_PATTERNS
};