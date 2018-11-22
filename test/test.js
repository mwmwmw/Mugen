describe("Music Generator", function() {
  it("is not undefined", function() {
    assert.equal(Mugen != undefined, true);
  });
  it("is an object", function() {
    assert.equal(typeof Mugen === "object", true);
  });
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

  describe("Chords", function() {

    it("atIndex() returns an array", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(1, scale, Mugen.CHORD_PATTERNS.MAJOR);
        assert.equal(typeof chord, "array");
    })

    it("chordAtIndex() returns the correct values", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(1, scale, Mugen.CHORD_PATTERNS.MAJOR);
        assert.equal(chord[0], 60);
        assert.equal(chord.length, 3);  
    })

    it("fromScale() returns an array of arrays", function() {
        let scale = Mugen.scale.makeScale();
        let chords = Mugen.chord.fromScale(scale, Mugen.CHORD_PATTERNS.MAJOR);
        assert.equal(typeof chords, "array");
        assert.equal(typeof chords[0], "array")
    })

    it("identify() returns the correct chord type", function() {
        let scale = Mugen.scale.makeScale();
        let chord = Mugen.chord.atIndex(1, scale, Mugen.CHORD_PATTERNS.MAJOR);
        assert.equal(typeof chord, "array");
    })

    it("matchChord() matches the passed in type of chord", function() {
        
    })

    it("matchChord() does not match the passed in type of chord", function() {
        
    })

    it("bassNote() returns the lowest note in a chord", function() {
        
    })

  });

  describe("Constants", function() {

    it("MAJOR scale pattern is correct", function() {
        
    })

  });

  describe("Melody", function() {

    it("filterRandomNotes() returns a new  array", function() {

    })

    it("randomNote() returns a single value", function() {
        
    })

    it("mutatePattern() returns a new array", function() {
        
    })

  });

  describe("Rhythm", function() {

    it("generateRhythm() returns an array of bools", function() {
        
    })

    it("syncopate() returns an array of bools", function() {
        
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

});

function randomPattern() {
  let arr = new Array(Math.floor(Math.random() * 100)).fill(0);
  return arr.map(v => Math.floor(Math.random() * 12));
}
