import { sort, check } from "./constants"

export const rotateScale = (scale, steps) => {
  let array = scale.slice();
  return array.splice(steps, array.length).concat(array.splice(0, steps));
}

const SEMITONES_IN_OCTAVE = 12;

const MIDI_MIDDLE_C = 60;

const DEFAULT_SCALE_RANGE = 24;

const MAJOR = [2,2,1,2,2,2,1];

export const SCALE_SIZE_IN_STEPS = {
  WESTERN: 7,
  PENTATONIC: 5,
  HEXATONIC: 6,
}

export const SCALE_PATTERNS = {
  CHROMATIC: [1,1,1,1,1,1,1,1,1,1,1,1],
  MAJOR: MAJOR,
  DORIAN: rotateScale(MAJOR,1),
  PHYGIAN: rotateScale(MAJOR,2),
  LYDIAN: rotateScale(MAJOR,3),
  MYXOLYDIAN: rotateScale(MAJOR,4),
  MINOR: rotateScale(MAJOR,5),
  LOCRIAN: rotateScale(MAJOR,6),
  PENTA: [2, 3, 2, 2, 3],
}

// calculates the biggest semitone leap that is possible provided the number of remaining steps
export const biggestSemitoneLeap = (steps = SCALE_SIZE_IN_STEPS.WESTERN, currentCount = 0, octave = SEMITONES_IN_OCTAVE) => {
  return (octave-currentCount) - steps + 1;
}

// generates a random semitone pattern that equal 12
export const generateSemitonePattern = (length = SCALE_SIZE_IN_STEPS.WESTERN) => {
  let scale = new Array(length).fill(1);
  let total = 0;

  var i = 0;

  while(sum(scale) < 12) {
    scale = scale.map(v=> {
    return  check(0.5) ? v+1 : v
    })
    i++;
  }

  var selector = 0;
  while(sum(scale) > 12) {
    selector = Math.floor(Math.random()*scale.length);
    if(scale[selector] > 1) {
      scale[selector]--;
    }
  }

  console.log("scale sum",sum(scale)-12)

  return scale;
}

export const generate = (semitones, rootNote = MIDI_MIDDLE_C, range = DEFAULT_SCALE_RANGE) => {
    let notes = [];
    for (let i = 0; i < range; i++) {
      notes.push(rootNote);
      const inc = semitones[i % semitones.length];
      rootNote += inc;
    }
    return notes; 
  }; 

export const sum = scale => scale.reduce((a, v) => a + v);

export const fitsOctave = (scale) => sum(scale)%SEMITONES_IN_OCTAVE === 0;

export const octaveRemainder = (scale) => sum(scale)%SEMITONES_IN_OCTAVE;

export const extractRawSemitonePattern = (notes) => {
  let newNotes = notes.slice().sort(sort);
  return newNotes.map((n,i)=>{
    if(i+1 < newNotes.length) { return newNotes[i+1] - n };
  }).filter((n)=>n!=undefined);
}

export const reconstructScale = (notes) => {

}

  export const transposeNotes = (notes, amountInSemitones) => {
      let newNotes = notes.slice();
      return newNotes.map((n)=>transpose(n, amountInSemitones)); 
  }

  export const transpose = (note, amount) => {
    return note + amount;
  }

