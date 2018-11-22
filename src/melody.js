import {
    check,
    shuffle
} from "./utils";


export const filterRandomNotes = (notes, probability = 0.5) => {
    return notes.filter(n => check(probability));
}

export const randomNote = (notes) => {
    var randomIndex = Math.floor(Math.random()*notes.length)
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

// export const calculateSequence = (
//     notes,
//     length = 16,
//     structure = generateMelodyStructure(),
//     offset = 0
// ) => {
//     let sequence = new Array(length).fill(-1);
//     let index = -1;
//     let prog = length / 4;
//     sequence.map((n, i) => {
//         let beat = i / length;
//         let gen = Math.random();
//         if (gen > beat) {
//             index++;
//         } else if (gen < 0.33333) {
//             index--;
//         } else {
//             index = Math.floor(Math.random() * notes.length);
//         }
//         if (index < 0) {
//             index += notes.length;
//         }

//         sequence[i] = structure[i % structure.length] ?
//             notes[index % notes.length] + offset :
//             -1;
//     });
//     return sequence;
// };