// Create an array with five todos
// You have x todos
// print the fist and second to last items -> todo: walk the dog

const todos = [{
    text: 'Go to the gym',
    completed: true
}, {
    text :'Buy groceries',
    completed: false
}, { 
    text: 'Do my loundry',
    completed: false
}, {
    text: 'Study javascript',
    completed: true
}, {
    text: 'Drink coffee',
    completed: true
}]

console.log(`You have ${todos.length} todos!`)

console.log(todos[0])
console.log(`First Todo: ${todos[0].text}`)
console.log(`Second to last Todo: ${todos[todos.length - 2].text}`)

// Delete the 3rd item
// Add a new item into the end
// Remove the first item from the list

todos.splice(2,1)
todos.push({text: 'Play lol', completed: false})
todos.shift()

console.log(todos)

// 1. The first item
// 2. The second item
// 3. The third item
// 4. The fourth item
// 5. The fifth item
// ...

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo.text} - Completed: ${todo.completed}`)
})

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const findTodo = function (todo, todoText) {
    return todo.find(function (note, index) { 
        return note.text.toLowerCase() === todoText.toLowerCase()
    })
}

let deleteTodo = function (todo, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'study javascript')
console.log(todos)

const getThingsToDo = function (array) {
    return array.filter(function (todos, index) {     
        return todos.completed === false
    })
}

console.log(getThingsToDo(todos))

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1 
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)