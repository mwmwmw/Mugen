import {
    CHORD_IDENTITIES
} from "./constants"

import {
    sort
} from "./utils"

export const atIndex = (index, scale, chordIdentity) => {
    let chord = [];
    chordIdentity.map((p) => { 
        chord.push(scale[(index + p) % scale.length])
    })
    return chord;
} 


export const fromScale = (scale, chordPattern) => {
    let chords = [];
    scale.map((v, i) => {
        chords.push(atIndex(i, scale, chordPattern))
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

export const matchChord = (chord, chordIdentity) => {
    let rootNote = chord[0]
    let id = chordIdentity.filter((n, i) => {
        return n === (chord[i] - rootNote);
    })
    return id.length === chordIdentity.length;
}

export const bassNote = (chord, bassTranspose = -24) => {
    return chord.sort(sort)[0] + bassTranspose;
}