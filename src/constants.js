// patterns
export const CHORD_SCALE_PATTERNS = {
  PENTA: [0, 2],
  TRIAD: [0, 2, 4],
  SUS2: [0, 1, 4],
  SUS4: [0, 3, 4],
  SEVENTH: [0, 2, 4, 6],
  NINTH: [0, 2, 4, 6, 8],
  ELEVENTH: [0, 2, 4, 6, 8, 10]
};

// identities
export const CHORD_SEMITONE_PATTERNS = {
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

export const CHORD_PROGRESSIONS = {
  "I IV V V" : [0, 3, 4, 4],
  "I I IV V" : [0, 0, 3, 4],
  "I VI IV V" : [0, 5, 3, 4],
  "V IV I I" : [4, 3, 0, 0],
  "CANNON" : [0, 4, 5, 2, 3, 0, 3, 4]
}

export const SEMITONES_IN_OCTAVE = 12;

export const MIDI_MIDDLE_C = 60;

export const DEFAULT_SCALE_RANGE = 24;

export const DEFAULT_PATTERN_LENGTH = 16;

export const MAJOR = [2,2,1,2,2,2,1];

export const SCALE_SIZE_IN_STEPS = {
  WESTERN: 7,
  PENTATONIC: 5,
  HEXATONIC: 6,
}

export const BEATS = 4;
export const MEASURES = 4;

export const SONG_PARTS = {
  A: "A",
  B: "B",
  C: "C",
  INTRO: "INTRO",
  OUTRO: "OUTRO"
};