const IsogramFinder = function (word) {
    this.word = word.toLowerCase()
}

IsogramFinder.prototype.isIsogram = function () {
    let existingLetters = {}
    for(letter of this.word){
        if(existingLetters[letter]){
            existingLetters[letter] += 1
        } else {
            existingLetters[letter] = 1
        }
    }

    let isogramOrNot = false
    for(const key in existingLetters){
        if(existingLetters[key] === 1){
            isogramOrNot = true
        } else {
            isogramOrNot = false
            break;
        }
    }
    return isogramOrNot


    console.log(existingLetters)
}

module.exports = IsogramFinder;
