describe("Music Generator", function () {

    it("is not undefined", function () {
        assert.equal(MusicGenerator != undefined, true);
    })

    it("is an object", function () {
        assert.equal(typeof MusicGenerator === "object", true);
    })

})


describe("Scale Processing", function () {

    var chromaticscale = MusicGenerator.scale.SCALE_PATTERNS.CHROMATIC;

    it("returns notes from semitones", function () {
        let scale = MusicGenerator.scale.generate(chromaticscale, 0, 128);
        assert.equal(scale.length, 128)
    })

    it("maps notes to midi notes", function () {
        let scale = MusicGenerator.scale.generate(chromaticscale, 0, 128);
        scale.map((n, i) => {
            assert.equal(n, i)
        })
    })

    it("root note gets specified", function () {
        let scale = MusicGenerator.scale.generate(chromaticscale, 60, 12);
        assert.equal(scale[0], 60)
    })

    it("extracts the Major Scale semitone pattern correctly", function () {
        let scalePattern = MusicGenerator.scale.SCALE_PATTERNS.MAJOR;
        let scale = MusicGenerator.scale.generate(scalePattern, 60, scalePattern.length);

        let semitonePattern = MusicGenerator.scale.extractRawSemitonePattern(scale);

        semitonePattern.map((n, i) => {
            assert.equal(n, scalePattern[i]);
        })

    })

    it("extracts the Chromatic Scale semitone pattern correctly", function () {
        let scalePattern = MusicGenerator.scale.SCALE_PATTERNS.CHROMATIC;
        let scale = MusicGenerator.scale.generate(scalePattern, 60, scalePattern.length);

        let semitonePattern = MusicGenerator.scale.extractRawSemitonePattern(scale);

        semitonePattern.map((n, i) => {
            assert.equal(n, scalePattern[i]);
        })

    })

    it("extracts the Full Semitone pattern correctly", function () {
        let scalePattern = MusicGenerator.scale.SCALE_PATTERNS.DORIAN;
        let scale = MusicGenerator.scale.generate(scalePattern, 60, 7);

        let semitonePattern = MusicGenerator.scale.extractRawSemitonePattern(scale);

        assert.equal(scale.length - 1, semitonePattern.length);

        console.log(MusicGenerator.scale.SCALE_PATTERNS.DORIAN, MusicGenerator.scale.sum(scalePattern), MusicGenerator.scale.sum(semitonePattern))

        for (var i = 0; i < semitonePattern.length; i++) {
            assert.equal(semitonePattern[i], scalePattern[i % scalePattern.length]);

        }
    })

    it("scale.extractRawSemitonePattern() return a valid semitone pattern", function () {
        for (var i = 0; i < 100; i++) {
            let scalePattern = randomPattern();
            let scale = MusicGenerator.scale.generate(scalePattern, 0, 127);
            let semitonePattern = MusicGenerator.scale.extractRawSemitonePattern(scale);
            assert.equal(scale.length - 1, semitonePattern.length);
            for (var i = 0; i < semitonePattern.length; i++) {
                assert.equal(semitonePattern[i], scalePattern[i % scalePattern.length]);
            }
        }
    })

    it('scale.sum() returns correct value', function () {
        assert.equal(MusicGenerator.scale.sum(MusicGenerator.scale.SCALE_PATTERNS.MAJOR), 12);
        assert.equal(MusicGenerator.scale.sum(MusicGenerator.scale.SCALE_PATTERNS.PENTA), 12);
        assert.equal(MusicGenerator.scale.sum([1, 2, 3]), 6)
    })

    it("scale.fitsOctave() returns the correct value", function () {
        assert.equal(MusicGenerator.scale.fitsOctave([1, 2, 3]), false);
        assert.equal(MusicGenerator.scale.fitsOctave(MusicGenerator.scale.SCALE_PATTERNS.MAJOR), true);
    })

})

function randomPattern() {
    let arr = new Array(Math.floor(Math.random() * 100)).fill(0);
    return arr.map(v => Math.floor(Math.random() * 12));
}