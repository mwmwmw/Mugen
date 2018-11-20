
describe("Music Generator", function(){

    it("is not undefined", function(){
        assert.equal(MusicGenerator != undefined, true);
    })

    it("is an object", function() {
        assert.equal(typeof MusicGenerator === "object", true);
    })

})


describe("Scale Processing", function(){

    var chromaticscale = [1,1,1,1,1,1,1,1,1,1,1,1];

    it("returns notes from semitones", function(){
        let scale = MusicGenerator.generateScale(chromaticscale, 0, 128);
        assert.equal(scale.length, 128)
    })

    it("maps notes to midi notes", function(){
        let scale = MusicGenerator.generateScale(chromaticscale, 0, 128);
        scale.map((n,i)=>{
            assert.equal(n, i)
        })
    })

    it("root note gets specified", function(){
        let scale = MusicGenerator.generateScale(chromaticscale, 60, 12);
        assert.equal(scale[0], 60)
    })

})