let botChampions = [{
    name: 'Lucian',
    lane: 'BOT',
    damage: 'AD'
}, {
    name: 'Ezreal',
    lane: 'BOT',
    damage: 'AD/AP'
}, {
    name: 'Miss Fortune',
    lane: 'BOT',
    damage: 'AD'
}]

let midChampions = [{
    name: 'Lux',
    lane: 'MID',
    damage: 'AP'
}, {
    name: 'Cassiopeia',
    lane: 'MID',
    damage: 'AP'
}, {
    name: 'Yasuo',
    lane: 'Mid',
    damage: 'AD'
}]


console.log(botChampions)

// Add a Champion 

botChampions.push({name: 'Ryze', lane: 'BOT', damage: 'AP'})

console.log(botChampions)

// Look at each champion

botChampions.forEach(function (item, index) {
    console.log(`${index + 1}. ${item.name}`)
})

for (let count = 0; count < botChampions.length; count++) {
    console.log(`${count + 1}. ${botChampions[count].name}`)
}

// Find a champion

const findChampion = function (array, championName) {
    return array.find(function (name, index) {
        return name.name.toLowerCase() === championName.toLowerCase()
    })
}

console.log(findChampion(botChampions, 'lucian'))

// Delete a Champion

const deleteChampion = function (array, championName) {
    const index = array.findIndex(function (champion) {
        return champion.name.toLowerCase() === championName.toLowerCase()
    })
    if (index > -1) {
        array.splice(index, 1)
    }
}

deleteChampion(midChampions, 'yasuo')
console.log(midChampions)