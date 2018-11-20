import Schedge from "schedule";

import { check, countValue } from "./constants";

import { generateScale } from "./scale";

import { generateRhythm } from "./rhythm";



const SONG_PART = {
  A: "A",
  B: "B",
  C: "C",
  INTRO: "INTRO",
  OUTRO: "OUTRO"
};

export const generateSong = (
  scale,
  beats = 4,
  measure = 4,
  structure = ["A", "B", "A", "C", "A", "B"]
) => {
  let rhythm = generateRhythm(beats, measure);

  let noteCount = countValue(rhythm, true);

  console.log(noteCount);

  let length = beats * measure;
  let allNotes = generateScale(scale.semitones);

  let melodyNotes = pickMelodyNotes(allNotes);

  let seqA = calculateSequence(melodyNotes, length, rhythm);
  let seqB = calculateSequence(melodyNotes, length, rhythm);
  let melodyNotes2 = pickMelodyNotes(allNotes);
  let seqC = calculateSequence(melodyNotes2, length * 4, rhythm, -5);

  return []
    .concat(seqA)
    .concat(mutatePattern(seqA, seqB))
    .concat(seqA)
    .concat(mutatePattern(seqA, seqC))
    .concat(seqB)
    .concat(mutatePattern(seqB, seqA))
    .concat(seqB)
    .concat(mutatePattern(seqB, allNotes))
    .concat(mutatePattern(seqA, seqB))
    .concat(seqC)
    .concat(seqA)
    .concat(mutatePattern(seqA, seqB))
    .concat(seqB)
    .concat(mutatePattern(seqB, seqA));
};
