export default class Song {

    name = "New Song";
    patterns = [];
    currentIndex = 0;



    get length () {
        //return
    }

    next() {
        this.currentIndex = (this.currentIndex + 1)%this.patterns.length;
        return this.patterns[this.currentIndex];
    }

    addPattern(pattern) {
        this.patterns.push(pattern)
    }

    getPattern(id) {
        this.patterns.find(p=>p.id === id);
    }

}