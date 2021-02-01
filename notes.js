const notes = [{
    tittle: 'My next trop',
    body: 'I would like to go to Spain'
}, {
    tittle: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    tittle: 'Office modification',
    body: 'Get a new seat'
}]

// Remove last item
//console.log(notes.pop())
// Add to the end
//notes.push('My new note')

// Removes first item
//console.log(notes.shift())
// Add to the begning
//notes.unshift('My first note')

// Remove from the middle of the array
//notes.splice(1, 1)
// Add to array at given position
//notes.splice(1, 0, 'This is the new second item')

// Change array at given position
//notes[2] = 'This is now the new 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

// // Counting... n times
// for (let count = 0; count <=2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length -1; count >= 0; count--) {
//     console.log(notes[count])
// }

// const findNote = function (array, noteTittle) {
//     const index = array.findIndex(function (note, index) {
//         return note.tittle.toLowerCase() === noteTittle.toLowerCase()
//     })
//     return notes[index]
// }

const findNote = function (array, noteTittle) {
    return array.find(function (note, index) {
        return note.tittle.toLowerCase() === noteTittle.toLowerCase()
    })
}

const note = findNote(notes, 'office modification')
console.log(note)

// notes.indexOf() *Check if has it in Array

// const index = notes.findIndex(function (note, index) {
//     return note.tittle === 'Habbits to work on'
// }) // *Check in array of objects

// console.log(index)

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTittleMatch = note.tittle.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        const isBoddyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isTittleMatch || isBoddyMatch
    })
}

console.log(findNotes(notes, 'eat'))

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.tittle.toLowerCase() < b.tittle.toLowerCase()) {
            return -1
        } else if (b.tittle.toLowerCase() < a.tittle.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)