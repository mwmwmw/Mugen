import { sort } from "./constants"

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
}


export const computeChords = (scale, chordPattern) => {
    let chords = [];
    scale.map((v,i)=>{
        chords.push(computeChord(i, scale, chordPattern))
    });
    return chords;
}

export const computeChord = (index, scale, chordPattern) => {
    let chord = [];
    chordPattern.map((p)=>{
        chord.push(scale[(index+p)%scale.length])
    })
    return chord;
}

export const identifyChordType = (chord) => {
    let keys = Object.keys(CHORD_IDENTITIES);
    let sortedChord = chord.slice().sort(sort);
    return keys.filter(k=>{
        let chordIdentity = CHORD_IDENTITIES[k].slice();
        return matchChord(sortedChord, chordIdentity)
    })

}
 
export const matchChord = (chord, chordIdentity) => {

    let rootNote = chord[0]
    console.log(chord)
    let id = chordIdentity.filter((n,i)=>{
        console.log((chord[i]-rootNote));
        return n === (chord[i]-rootNote);
    })
    return id.length === chordIdentity.length;
}