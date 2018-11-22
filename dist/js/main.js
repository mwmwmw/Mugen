var Mugen=function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n);var e={};r.r(e),r.d(e,"check",function(){return d}),r.d(e,"countValue",function(){return N}),r.d(e,"sort",function(){return S}),r.d(e,"shuffle",function(){return s});var u={};r.r(u),r.d(u,"atIndex",function(){return I}),r.d(u,"fromScale",function(){return E}),r.d(u,"identify",function(){return O}),r.d(u,"matchChord",function(){return R}),r.d(u,"bassNote",function(){return T});var o={};r.r(o),r.d(o,"rotateScale",function(){return _}),r.d(o,"SCALE_PATTERNS",function(){return p}),r.d(o,"biggestSemitoneLeap",function(){return M}),r.d(o,"generateSemitonePattern",function(){return A}),r.d(o,"refit",function(){return m}),r.d(o,"generate",function(){return h}),r.d(o,"sum",function(){return g}),r.d(o,"fitsOctave",function(){return D}),r.d(o,"octaveRemainder",function(){return v}),r.d(o,"extractRawSemitonePattern",function(){return P}),r.d(o,"reconstructScale",function(){return b}),r.d(o,"transposeNotes",function(){return y}),r.d(o,"transpose",function(){return C}),r.d(o,"makeScale",function(){return H});var i={};r.r(i),r.d(i,"filterRandomNotes",function(){return L}),r.d(i,"randomNote",function(){return V}),r.d(i,"mutatePattern",function(){return j});const c={PENTA:[0,2],TRIAD:[0,2,4],SUS2:[0,1,4],SUS4:[0,3,4],SEVENTH:[0,2,4,6],NINTH:[0,2,4,6,8],ELEVENTH:[0,2,4,6,8,10]},f={MAJOR:[0,4,7],MAJOR_1ST_INVERSION:[0,5,9],MAJOR_2ND_INVERSION:[0,3,8],MINOR:[0,3,7],MINOR_1ST_INVERSION:[0,4,9],MINOR_2ND_INVERSION:[0,5,8],DIMINISHED:[0,3,6],DIMINISHED_1ST_INVERSION:[0,3,9],DIMINISHED_2ND_INVERSION:[0,6,9],AUGMENTED:[0,4,8]},l=[2,2,1,2,2,2,1],a={WESTERN:7,PENTATONIC:5,HEXATONIC:6},d=t=>Math.random()<t,N=(t,n=!0,r=0)=>t.reduce((t,r)=>r===n?t+1:t,r),S=(t,n)=>t-n,s=t=>{let n=t.slice();for(var r,e,u=n.length;u;)e=Math.floor(Math.random()*u--),r=n[u],n[u]=n[e],n[e]=r;return n},I=(t,n,r)=>{let e=[];return r.map(r=>{e.push(n[(t+r)%n.length])}),e},E=(t,n)=>{let r=[];return t.map((e,u)=>{r.push(I(u,t,n))}),r},O=t=>{let n=Object.keys(f),r=t.slice().sort(S);return n.filter(t=>{let n=f[t].slice();return R(r,n)})},R=(t,n)=>{let r=t[0];return n.filter((n,e)=>n===t[e]-r).length===n.length},T=(t,n=-24)=>t.sort(S)[0]+n,_=(t,n)=>{let r=t.slice();return r.splice(n,r.length).concat(r.splice(0,n))},p={CHROMATIC:[1,1,1,1,1,1,1,1,1,1,1,1],MAJOR:l,DORIAN:_(l,1),PHYGIAN:_(l,2),LYDIAN:_(l,3),MYXOLYDIAN:_(l,4),MINOR:_(l,5),LOCRIAN:_(l,6),PENTA:[2,3,2,2,3]},M=(t=a.WESTERN,n=0,r=12)=>r-n-t+1,A=(t=a.WESTERN,n=12)=>{let r=new Array(t).fill(1);for(;g(r)<n;)r=r.map(t=>d(.5)?t+1:t);return m(r)},m=(t,n=12)=>{for(var r=0;g(t)!=n;)t[r=Math.floor(Math.random()*t.length)]>1&&(g(t)>n?t[r]--:t[r]++);return t},h=(t,n=60,r=24)=>{let e=[];for(let u=0;u<r;u++){e.push(n),n+=t[u%t.length]}return e},g=t=>t.reduce((t,n)=>t+n),D=t=>g(t)%12==0,v=t=>g(t)%12,P=t=>{let n=t.slice().sort(S);return n.map((t,r)=>{if(r+1<n.length)return n[r+1]-t}).filter(t=>void 0!=t)},b=t=>{},y=(t,n)=>{return t.slice().map(t=>C(t,n))},C=(t,n)=>t+n,H=()=>h(A(),60,24),L=(t,n=.5)=>t.filter(t=>d(n)),V=t=>s(t)[0],j=(t,n)=>{let r=t.slice();return r.map((t,e)=>d(e/r.length)?r[e]:n[Math.floor(Math.random()*n.length)]),r};r.d(n,"chord",function(){return u}),r.d(n,"scale",function(){return o}),r.d(n,"utils",function(){return e}),r.d(n,"melody",function(){return i}),r.d(n,"CHORD_IDENTITIES",function(){return f}),r.d(n,"CHORD_PATTERNS",function(){return c}),r.d(n,"SEMITONES_IN_OCTAVE",function(){return 12}),r.d(n,"MIDI_MIDDLE_C",function(){return 60}),r.d(n,"DEFAULT_SCALE_RANGE",function(){return 24}),r.d(n,"MAJOR",function(){return l}),r.d(n,"SCALE_SIZE_IN_STEPS",function(){return a}),r.d(n,"SONG_PARTS",function(){}),r.d(n,"SCALE_PATTENRS",function(){})}]);
//# sourceMappingURL=main.js.map