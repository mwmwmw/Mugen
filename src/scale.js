
export const generateScale = (semitones, rootNote = 60, range = 24) => {
    let notes = [rootNote];
    for (let i = 0; i < range; i++) {
      const inc = semitones[i % semitones.length];
      rootNote += inc;
      notes.push(rootNote);
    }
    return notes;
  }; 