
export const generateScale = (semitones, rootNote = 60, range = 24) => {
    let notes = [];
    for (let i = 0; i < range; i++) {
      notes.push(rootNote);
      const inc = semitones[i % semitones.length];
      rootNote += inc;
    }
    return notes;
  }; 


  export const transpose = (notes, amountInSemitones) => {
      let newNotes = notes.slice();
      return newNotes.map((n)=>n+amountInSemitones); 
  }