console.log(Mugen.SCALE_PATTERNS)

describe("Music Generator", function() {
  it("is not undefined", function() {
    assert.equal(Mugen != undefined, true);
  });
  it("is an object", function() {
    assert.equal(typeof Mugen === "object", true);
  });

  it("has all the features", function() {
    assert.equal(typeof Mugen.scale === "object", true);
    assert.equal(typeof Mugen.chord === "object", true);
    assert.equal(typeof Mugen.rhythm === "object", true);
    assert.equal(typeof Mugen.melody === "object", true);
    assert.equal(typeof Mugen.utils === "object", true);
  });

});

describe("Constants", function() {

  it("has all the constants", function() {
    assert.equal(typeof Mugen.CHORD_SEMITONE_PATTERNS === "object", true);
    assert.equal(typeof Mugen.CHORD_SCALE_PATTERNS === "object", true);
    assert.equal(typeof Mugen.MAJOR === "object", true);
    assert.equal(typeof Mugen.SONG_PARTS === "object", true);
    assert.equal(typeof Mugen.SCALE_PATTERNS === "object", true);
    assert.equal(typeof Mugen.SCALE_SIZE_IN_STEPS === "object", true);
    assert.equal(typeof Mugen.SEMITONES_IN_OCTAVE === "number", true);
    assert.equal(typeof Mugen.MIDI_MIDDLE_C === "number", true);
    assert.equal(typeof Mugen.DEFAULT_SCALE_RANGE === "number", true);
  });

  it("MAJOR scale pattern is correct", function() {
    let major = [2,2,1,2,2,2,1];  
    Mugen.MAJOR.map((n, i)=>{
      assert.equal(n, major[i]);
    })   
  })

});

describe("Scale Processing", function() {
  var chromaticscale = Mugen.SCALE_PATTERNS.CHROMATIC;

  it("generate() maps notes to midi notes", function() {
    let scale = Mugen.scale.generate(chromaticscale, 0, 128);
    scale.map((n, i) => {
      assert.equal(n, i);
    });
  });

  it("generate() root note gets specified", function() {
    let scale = Mugen.scale.generate(chromaticscale, 60, 12);
    assert.equal(scale[0], 60);
  });


  it("extractRawSemitonePattern() returns a valid semitone pattern", function() {
    for (var i = 0; i < 100; i++) {
      let scalePattern = randomPattern();
      let scale = Mugen.scale.generate(scalePattern, 0, 127);
      let semitonePattern = Mugen.scale.extractRawSemitonePattern(
        scale
      );
      assert.equal(scale.length - 1, semitonePattern.length);
      for (var i = 0; i < semitonePattern.length; i++) {
        assert.equal(semitonePattern[i], scalePattern[i % scalePattern.length]);
      }
    }
  });

  it("sum() returns correct value", function() {
    assert.equal(
      Mugen.scale.sum(Mugen.SCALE_PATTERNS.MAJOR),
      12
    );
    assert.equal(
      Mugen.scale.sum(Mugen.SCALE_PATTERNS.PENTA),
      12
    );
    assert.equal(Mugen.scale.sum([1, 2, 3]), 6);
  });

  it("fitsOctave() returns correct value", function() {
    assert.equal(Mugen.scale.fitsOctave([1, 2, 3]), false);
    assert.equal(
      Mugen.scale.fitsOctave(
        Mugen.SCALE_PATTERNS.MAJOR
      ),
      true
    );
  });

  it("generateSemitonePattern() generates scales that add up to 12", function() {
    for (var i = 0; i < 1000; i++) {
      let scale = Mugen.scale.generateSemitonePattern();
      assert.equal(
        Mugen.scale.sum(scale),
        Mugen.SEMITONES_IN_OCTAVE
      );
    }
  });

});

  describe("Chords", function() {

    it("atIndex() returns an array", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(0, scale, Mugen.CHORD_SCALE_PATTERNS.TRIAD);
        
        assert.equal(Array.isArray(chord), true);
    })

    it("chordAtIndex() returns the correct values", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(0, scale, Mugen.CHORD_SCALE_PATTERNS.TRIAD);
        assert.equal(chord[0], 60);
        assert.equal(chord.length, 3);  
    })

    it("fromScale() returns an array of arrays", function() {
        let scale = Mugen.scale.makeScale();
        let chords = Mugen.chord.fromScale(scale, Mugen.CHORD_SCALE_PATTERNS.TRIAD);
        assert.equal(Array.isArray(chords), true);
        assert.equal(Array.isArray(chords[0]), true);
    })

    it("identify() returns the correct chord type", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(1, scale, Mugen.CHORD_SCALE_PATTERNS.TRIAD);
        assert.equal(Array.isArray(chord), true);
    })

    it("matchChord() matches the passed in type of chord", function() {
      let scale = Mugen.scale.generate(Mugen.MAJOR);
      let chord = Mugen.chord.fromScale(scale, Mugen.CHORD_SCALE_PATTERNS.TRIAD);

      assert.equal(Mugen.chord.matchChord(chord[0], Mugen.CHORD_SEMITONE_PATTERNS.MAJOR), true);
      assert.equal(Mugen.chord.matchChord(chord[1], Mugen.CHORD_SEMITONE_PATTERNS.MINOR), true);
      assert.equal(Mugen.chord.matchChord(chord[6], Mugen.CHORD_SEMITONE_PATTERNS.DIMINISHED), true);
    })


    it("bassNote() returns the lowest note in a chord", function() {
      let chord = [23, 50, 99, 20];
      assert.equal(Mugen.chord.bassNote(chord,0), 20);
      assert.equal(Mugen.chord.bassNote(chord), -4)
    })

  });

  describe("Rhythm", function() {

    it("generateRhythm() returns an array of bools", function() {
        
    })

    it("syncopate() returns an array of bools", function() {
        
    })

  });

  describe("Melody", function() {

    it("filterRandomNotes() returns a new array", function() {
      let scale = [1, 2, 3, 4, 5, 6, 7, 8];
      let filtered = Mugen.melody.filterRandomNotes(scale, 1);
      assert.equal(filtered.length, scale.length); 

      let filtered2 = Mugen.melody.filterRandomNotes(scale, 0);
      assert.equal(filtered2.length, 0);

    })

    it("randomNote() returns a single value", function() {
      let scale = [1, 2, 3, 4, 5, 6, 7, 8];
      let note = Mugen.melody.randomNote(scale);

      assert.equal(typeof note, "number");
      let value = scale.indexOf(note)
      assert.equal(value > -1, true);
    })

    it("mutatePattern() returns a new array", function() {
        
    })

  });

  describe("Utils", function() {

    it("check() returns right amounts based on probability", function() {
        
    })

    it("countValue() tallies the number of 'value' in the array", function() {
        
    })

    it("sort() puts numbers into ascending order", function() {
        
    })

    it("shuffle() randomizes an array", function() {
        
    })



});

function randomPattern() {
  let arr = new Array(Math.floor(Math.random() * 100)).fill(0);
  return arr.map(v => Math.floor(Math.random() * 12));
}
