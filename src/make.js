import { check, countValue } from "./utils";
import * as chord from "./chord";
import * as utils from "./utils";
import * as scales  from "./scale";
import * as rhythm from "./rhythm";
import {SEMITONES_IN_OCTAVE, SONG_PARTS, MAJOR, BEATS, MEASURES, CHORD_PROGRESSIONS} from "./constants";

export const scale = (rootNote = 60, octaves = 2, pattern = MAJOR) =>{
  return scales.generate(pattern, rootNote, SEMITONES_IN_OCTAVE*octaves);
}

export const progression = (s = scale()) => {
  let progs = Object.keys(CHORD_PROGREsSSIONS);
  let prog =  CHORD_PROGRESSIONS[utils.getRandom(progs)];
  let chords = chord.fromScale(s);

  return prog.map((v)=>chords[v]);
}

export const song = (
  s = scale(),
  beats = BEATS,
  measure = MEASURES,
  parts = SONG_PARTS
) => {
  let melodicStructure = rhythm.generate(beats, measure);
  let counterrhythm = rhythm.syncopate(melodicStructure);

  let partkeys= Object.keys(parts);

  let chordsA = progression(s);
  let bassA = chord.bassNote(chordsA);

  let noteCount = countValue(melodicStructure, true); 

  let length = beats * measure;
  let melodyNotes = pickMelodyNotes(scale);

  let seqA = melody.generate(melodyNotes, length, melodicStructure);
  let seqB = melody.generate(melodyNotes, length, melodicStructure);
  let melodyNotes2 = pickMelodyNotes(s);
  let seqC = melody.generate(melodyNotes2, length * 4, melodicStructure, -5);

  return []
};

export const part = ({ chords, bass, rhythm}) => {
  return [1]
}