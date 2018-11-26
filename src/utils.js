import { MAJOR } from "./constants";

export const check = probability => Math.random() < probability;

export const countValue = (arr, value = true, start = 0) => {
  return arr.reduce((a, v) => (v === value ? a + 1 : a), start);
};

export const sort = (a, b) => a - b;

export const shuffle = array => {
  let shuffledArray = array.slice();
  var m = shuffledArray.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = shuffledArray[m];
    shuffledArray[m] = shuffledArray[i];
    shuffledArray[i] = t;
  }
  return shuffledArray;
};

export const getRandom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

function checkCase(letter) {
  return letter === letter.toUpperCase() && letter !== letter.toLowerCase();
}

const AUGMENTED_SYMBOL = "+";
const AUGMENTED = "AUGMENTED";
const DIMINISHED_SYMBOL = "o";
const DIMINISHED = "DIMINISHED";
const FLAT_SYMBOL = "b";
const SHARP_SYMBOL = "#";

const CHORD_REGEX = /([b|#]?)([VI]*)(?:([o|+]?))(?:(([0-9]*|add[0-9]*|[#|b][0-9])*)?)/i;
const SCALE_TYPE = {
  MAJOR: "MAJOR",
  MINOR: "MINOR"
};

export const romanChord = chord => {
  let match = CHORD_REGEX.exec(chord);

  let transpose = checkTranspose();
  let type = checkCase(match[2]) ? SCALE_TYPE.MAJOR : SCALE_TYPE.MINOR;
  let degree = scaleDegree(match[2]);
  let scaleIndex = degree - 1;
  let modifier = checkAlteration(match[3]);
  let extensions = getExtensions(match[4]);

  return {
    transpose,
    type,
    degree,
    modifier,
    extensions,
    scaleIndex
  };
};

function scaleDegree(symbol) {
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
}

function getExtensions(ext) {
  let extensions = [];
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

  return extensions;
}

function checkTranspose(symbol) {
  if (symbol === "" || symbol == null) {
    return 0;
  }
  if (symbol === FLAT_SYMBOL) {
    return -1;
  }
  if (symbol === SHARP_SYMBOL) {
    return +1;
  }
  return 0;
}

function checkAlteration(alteration) {
  if (alteration === "" || alteration === null) {
    return false;
  }
  if (alteration === AUGMENTED_SYMBOL) {
    return AUGMENTED;
  }
  if (alteration === DIMINISHED_SYMBOL) {
    return DIMINISHED;
  }
}

