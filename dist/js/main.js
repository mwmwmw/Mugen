var Mugen=function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n);var e={};r.r(e),r.d(e,"check",function(){return I}),r.d(e,"countValue",function(){return S}),r.d(e,"sort",function(){return E}),r.d(e,"shuffle",function(){return s});var u={};r.r(u),r.d(u,"atIndex",function(){return O}),r.d(u,"fromScale",function(){return R}),r.d(u,"identify",function(){return T}),r.d(u,"matchChord",function(){return A}),r.d(u,"bassNote",function(){return _});var o={};r.r(o),r.d(o,"rotateScale",function(){return M}),r.d(o,"SCALE_PATTERNS",function(){return h}),r.d(o,"biggestSemitoneLeap",function(){return m}),r.d(o,"generateSemitonePattern",function(){return p}),r.d(o,"refit",function(){return D}),r.d(o,"generate",function(){return g}),r.d(o,"sum",function(){return y}),r.d(o,"fitsOctave",function(){return v}),r.d(o,"octaveRemainder",function(){return C}),r.d(o,"extractRawSemitonePattern",function(){return P}),r.d(o,"reconstructScale",function(){return b}),r.d(o,"transposeNotes",function(){return H}),r.d(o,"transpose",function(){return L}),r.d(o,"makeScale",function(){return V});var i={};r.r(i),r.d(i,"generate",function(){return j}),r.d(i,"filterRandomNotes",function(){return x}),r.d(i,"randomNote",function(){return J}),r.d(i,"mutatePattern",function(){return U});var c={};r.r(c),r.d(c,"generateRhythm",function(){return w}),r.d(c,"syncopate",function(){return G});const f={PENTA:[0,2],TRIAD:[0,2,4],SUS2:[0,1,4],SUS4:[0,3,4],SEVENTH:[0,2,4,6],NINTH:[0,2,4,6,8],ELEVENTH:[0,2,4,6,8,10]},a={MAJOR:[0,4,7],MAJOR_1ST_INVERSION:[0,5,9],MAJOR_2ND_INVERSION:[0,3,8],MINOR:[0,3,7],MINOR_1ST_INVERSION:[0,4,9],MINOR_2ND_INVERSION:[0,5,8],DIMINISHED:[0,3,6],DIMINISHED_1ST_INVERSION:[0,3,9],DIMINISHED_2ND_INVERSION:[0,6,9],AUGMENTED:[0,4,8]},l=[2,2,1,2,2,2,1],d={WESTERN:7,PENTATONIC:5,HEXATONIC:6},N={A:"A",B:"B",C:"C",INTRO:"INTRO",OUTRO:"OUTRO"},I=t=>Math.random()<t,S=(t,n=!0,r=0)=>t.reduce((t,r)=>r===n?t+1:t,r),E=(t,n)=>t-n,s=t=>{let n=t.slice();for(var r,e,u=n.length;u;)e=Math.floor(Math.random()*u--),r=n[u],n[u]=n[e],n[e]=r;return n},O=(t,n,r=f.TRIAD)=>{let e=[];return r.map(r=>{e.push(n[(t+r)%n.length])}),e},R=(t,n=f.TRIAD)=>{let r=[];return t.map((e,u)=>{r.push(O(u,t,n))}),r},T=t=>{let n=Object.keys(CHORD_IDENTITIES),r=t.slice().sort(E);return n.filter(t=>{let n=CHORD_IDENTITIES[t].slice();return A(r,n)})},A=(t,n=a.MAJOR)=>{let r=t[0];return n.filter((n,e)=>n===t[e]-r).length===n.length},_=(t,n=-24)=>t.sort(E)[0]+n,M=(t,n)=>{let r=t.slice();return r.splice(n,r.length).concat(r.splice(0,n))},h={CHROMATIC:[1,1,1,1,1,1,1,1,1,1,1,1],MAJOR:l,DORIAN:M(l,1),PHYGIAN:M(l,2),LYDIAN:M(l,3),MYXOLYDIAN:M(l,4),MINOR:M(l,5),LOCRIAN:M(l,6),PENTA:[2,3,2,2,3]},m=(t=d.WESTERN,n=0,r=12)=>r-n-t+1,p=(t=d.WESTERN,n=12)=>{let r=new Array(t).fill(1);for(;y(r)<n;)r=r.map(t=>I(.5)?t+1:t);return D(r)},D=(t,n=12)=>{for(var r=0;y(t)!=n;)t[r=Math.floor(Math.random()*t.length)]>1&&(y(t)>n?t[r]--:t[r]++);return t},g=(t,n=60,r=24)=>{let e=[];for(let u=0;u<r;u++){e.push(n),n+=t[u%t.length]}return e},y=t=>t.reduce((t,n)=>t+n),v=t=>y(t)%12==0,C=t=>y(t)%12,P=t=>{let n=t.slice().sort(E);return n.map((t,r)=>{if(r+1<n.length)return n[r+1]-t}).filter(t=>void 0!=t)},b=t=>{},H=(t,n)=>{return t.slice().map(t=>L(t,n))},L=(t,n)=>t+n,V=()=>g(p(),60,24),j=(t,n,r=16)=>{},x=(t,n=.5)=>t.filter(t=>I(n)),J=t=>{return t[Math.floor(Math.random()*t.length)]},U=(t,n)=>{let r=t.slice();return r.map((t,e)=>I(e/r.length)?r[e]:n[Math.floor(Math.random()*n.length)]),r},w=(t=4,n=4)=>{let r=new Array(t*n).fill(0);return r.map((n,e)=>{let u=1/(e%t+1);r[e]=I(u)}),r},G=t=>{t.slice().map(t=>t?!t:I(Math.random()))};r.d(n,"chord",function(){return u}),r.d(n,"scale",function(){return o}),r.d(n,"utils",function(){return e}),r.d(n,"melody",function(){return i}),r.d(n,"rhythm",function(){return c}),r.d(n,"CHORD_SEMITONE_PATTERNS",function(){return a}),r.d(n,"CHORD_SCALE_PATTERNS",function(){return f}),r.d(n,"SEMITONES_IN_OCTAVE",function(){return 12}),r.d(n,"MIDI_MIDDLE_C",function(){return 60}),r.d(n,"DEFAULT_SCALE_RANGE",function(){return 24}),r.d(n,"MAJOR",function(){return l}),r.d(n,"SCALE_SIZE_IN_STEPS",function(){return d}),r.d(n,"SONG_PARTS",function(){return N}),r.d(n,"SCALE_PATTERNS",function(){return h})}]);
//# sourceMappingURL=main.js.map