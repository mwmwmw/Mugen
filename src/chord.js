import {
    CHORD_SCALE_PATTERNS,
    CHORD_SEMITONE_PATTERNS,
} from "./constants"

import {
    sort
} from "./utils"

export const atIndex = (index, scale, chordScalePattern = CHORD_SCALE_PATTERNS.TRIAD) => {
    let chord = [];
    chordScalePattern.map((p) => { 
        chord.push(scale[(index + p) % scale.length])
    })
    return chord;
} 

export const fromNote = (note, chordPattern = CHORD_SEMITONE_PATTERNS.MAJOR) => {
    let chord = [];
    chordPattern.map(p=>{
        chord.push(note+p);
    })
    return chord;
}

export const fromScale = (scale, chordScalePattern = CHORD_SCALE_PATTERNS.TRIAD) => {
    let chords = [];
    scale.map((v, i) => {
        chords.push(atIndex(i, scale, chordScalePattern))
    });
    return chords;
}

export const identify = (chord) => {
    let keys = Object.keys(CHORD_IDENTITIES);
    let sortedChord = chord.slice().sort(sort);
    return keys.filter(k => {
        let chordIdentity = CHORD_IDENTITIES[k].slice();
        return matchChord(sortedChord, chordIdentity)
    })
}

export const matchChord = (chord, chordIdentity = CHORD_SEMITONE_PATTERNS.MAJOR) => {
    let rootNote = chord[0]
    let id = chordIdentity.filter((n, i) => {
        return n === (chord[i] - rootNote);
    })
    return id.length === chordIdentity.length;
}

export const bassNote = (chord, bassTranspose = -24) => {
    return chord.sort(sort)[0] + bassTranspose;
}