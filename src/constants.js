export const CHORD_PATTERNS = {
  PENTA: [0, 2],
  TRIAD: [0, 2, 4],
  SUS2: [0, 1, 4],
  SUS4: [0, 3, 4],
  SEVENTH: [0, 2, 4, 6],
  NINTH: [0, 2, 4, 6, 8],
  ELEVENTH: [0, 2, 4, 6, 8, 10]
};

export const CHORD_IDENTITIES = {
  MAJOR: [0, 4, 7],
  MAJOR_1ST_INVERSION: [0, 5, 9],
  MAJOR_2ND_INVERSION: [0, 3, 8],
  MINOR: [0, 3, 7],
  MINOR_1ST_INVERSION: [0, 4, 9],
  MINOR_2ND_INVERSION: [0, 5, 8],
  DIMINISHED: [0, 3, 6],
  DIMINISHED_1ST_INVERSION: [0, 3, 9],
  DIMINISHED_2ND_INVERSION: [0, 6, 9],
  AUGMENTED: [0, 4, 8]
}

export const SEMITONES_IN_OCTAVE = 12;

export const MIDI_MIDDLE_C = 60;

export const DEFAULT_SCALE_RANGE = 24;

export const MAJOR = [2,2,1,2,2,2,1];

export const SCALE_SIZE_IN_STEPS = {
  WESTERN: 7,
  PENTATONIC: 5,
  HEXATONIC: 6,
}

const SONG_PART = {
  A: "A",
  B: "B",
  C: "C",
  INTRO: "INTRO",
  OUTRO: "OUTRO"
};