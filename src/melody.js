import {
    check
} from "./utils";

import {
    DEFAULT_PATTERN_LENGTH
} from "./constants"

export const generate = (notes, pattern, length = DEFAULT_PATTERN_LENGTH) => {
    let sequence = new Array(length).fill(null);
    let index = -1;
    return sequence.map((n, i) => {
        let beat = i / length;
        let gen = Math.random();
        if (gen > beat) {
            index++;
        } else if (gen < 0.33333) {
            index--;
        } else {
            index = getRandom(notes);
        }
        if (index < 0) {
            index += notes.length;
        }
        return pattern[i % pattern.length] ?
            notes[index % notes.length] :
            null;
    });
}

export const filterRandomNotes = (notes, probability = 0.5) => {
    return notes.filter(n => check(probability));
}

export const randomNote = (notes) => {
    var randomIndex = Math.floor(Math.random() * notes.length)
    return notes[randomIndex];
}

export const mutatePattern = (pattern, notes) => {
    let newPattern = pattern.slice();
    newPattern.map((n, i) => {
        return check(i / newPattern.length) ?
            newPattern[i] :
            notes[Math.floor(Math.random() * notes.length)];
    });
    return newPattern;
};