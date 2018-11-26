import {
  CHORD_SCALE_PATTERNS,
  CHORD_SEMITONE_PATTERNS,
  MAJOR_EXTENSIONS,
  MINOR_EXTENSIONS,
  CHORD_REGEX,
  CHORD_TYPE,
  CHORD_SYMBOL,
} from "./constants";

import { sort, checkCase } from "./utils";

export const atIndex = (
  index,
  scale,
  chordScalePattern = CHORD_SCALE_PATTERNS.TRIAD
) => {
  let chord = [];
  chordScalePattern.map(p => {
    chord.push(scale[(index + p) % scale.length]);
  });
  return chord;
};

export const fromNote = (
  note,
  chordPattern = CHORD_SEMITONE_PATTERNS.MAJOR
) => {
  let chord = [];
  chordPattern.map(p => {
    chord.push(note + p);
  });
  return chord;
};

export const fromScale = (
  scale,
  chordScalePattern = CHORD_SCALE_PATTERNS.TRIAD
) => {
  let chords = [];
  scale.map((v, i) => {
    chords.push(atIndex(i, scale, chordScalePattern));
  });
  return chords;
};

export const identify = chord => {
  let keys = Object.keys(CHORD_IDENTITIES);
  let sortedChord = chord.slice().sort(sort);
  return keys.filter(k => {
    let chordIdentity = CHORD_IDENTITIES[k].slice();
    return matchChord(sortedChord, chordIdentity);
  });
};

export const matchChord = (
  chord,
  chordIdentity = CHORD_SEMITONE_PATTERNS.MAJOR
) => {
  let rootNote = chord[0];
  let id = chordIdentity.filter((n, i) => {
    return n === chord[i] - rootNote;
  });
  return id.length === chordIdentity.length;
};

export const bassNote = (chord, bassTranspose = -24) => {
  return chord.sort(sort)[0] + bassTranspose;
};

export const romanChord = (chordString, rootNote = 60) => {

    let details = getChordDetails(chordString);

    if(details) {

    let note = rootNote + details.transpose;

    let chord = CHORD_SEMITONE_PATTERNS[details.type].map((v, i)=>note+v);

    let intervals = chord.type === CHORD_TYPE.MAJOR ? MAJOR_EXTENSIONS : MINOR_EXTENSIONS;

    details.extensions.map(v=>{
        chord.push(note+(intervals[v.note]+v.transpose));
    })

    return chord;
    } else {
        throw new Error(`${chordString} is not a roman chord`);
    }
}

export const getChordDetails = (chord) => {
  let match = CHORD_REGEX.exec(chord);
  if(match[2] != "") {
  let transpose = checkTranspose(match[1]);
  let modifier = checkAlteration(match[3]);
  let type = !modifier ? (checkCase(match[2]) ? CHORD_TYPE.MAJOR : CHORD_TYPE.MINOR) : modifier;
  let degree = scaleDegree(match[2]);
  let scaleIndex = degree - 1;
  
  let extensions = getExtensions(match[4]);

  return {
    transpose,
    type,
    degree,
    extensions,
    scaleIndex
  };
 } else {
    return null;
 }
};

export const scaleDegree = symbol => {
  let letters = symbol.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "I" || letters[i] === "i") {
      count++;
    }
    if (letters[i] === "V" || letters[i] === "v") {
      if (count > 0) {
        count = 5 - count;
      } else {
        count += 5;
      }
    }
  }
  return count;
};

export const getExtensions = (ext) => {
  let extensions = [];
  if(ext) {
  let types = ext.split(/[0-9]{1,2}/).filter(v => v != "");
  let values = ext.split(/#|b|add/).filter(v => v != "");

  if (values.length != types.length) {
    types.unshift("");
  }

  types.map((v, i) => {
    extensions.push({
      transpose: checkTranspose(v),
      note: parseInt(values[i], 10)
    });
  });
 }
  return extensions;
};

export const checkTranspose = (symbol) => {
  if (symbol === "" || symbol == null) {
    return 0;
  }
  if (symbol === CHORD_SYMBOL.FLAT) {
    return -1;
  }
  if (symbol === CHORD_SYMBOL.SHARP) {
    return 1;
  }
  return 0;
};

export const checkAlteration = (alteration) => {
  if (alteration === "" || alteration === null) {
    return false;
  }
  if (alteration === CHORD_SYMBOL.AUGMENTED) {
    return CHORD_TYPE.AUGMENTED;
  }
  if (alteration === CHORD_SYMBOL.DIMINISHED) {
    return CHORD_TYPE.DIMINISHED;
  }
};
