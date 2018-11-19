import Schedge from "schedule";

import { check, countValue } from "./constants";

import { generateScale } from "./scale";

import { generateRhythm } from "./rhythm";

export const pickMelodyNotes = scale => {
  let notes = scale.slice();
  return notes.filter(n => {
    if (check(0.5)) return false;
    return true;
  });
};

export const calculateSequence = (
  notes,
  length = 16,
  structure = generateMelodyStructure(),
  offset = 0
) => {
  let sequence = new Array(length).fill(-1);
  let index = -1;
  let prog = length / 4;
  sequence.map((n, i) => {
    let beat = i / length;
    let gen = Math.random();
    if (gen > beat) {
      index++;
    } else if (gen < 0.33333) {
      index--;
    } else {
      index = Math.floor(Math.random() * notes.length);
    }
    if (index < 0) {
      index += notes.length;
    }

    sequence[i] = structure[i % structure.length]
      ? notes[index % notes.length] + offset
      : -1;
  });
  return sequence;
};

export const mutatePattern = (pattern, notes) => {
  let newPattern = pattern.slice();

  newPattern.map((n, i) => {
    newPattern[i] = check(i / newPattern.length)
      ? newPattern[i]
      : notes[Math.floor(Math.random() * notes.length)];
  });

  return newPattern;
};

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
