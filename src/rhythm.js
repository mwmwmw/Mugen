import {check} from "./constants";
 
export const generateRhythm = (beats = 4, measure = 4) => {
    let sequence = new Array(beats * measure).fill(0);
    sequence.map((n, i) => {
      let pulse = 1 / ((i % beats) + 1);
      sequence[i] = check(pulse);
    });
    return sequence;
  };
  
  export const syncopate = (rhythm) => {
    let newRythm = rhythm.slice();
    newRythm.map((v)=>{
        return v ? !v : check(Math.random())
    })

  }