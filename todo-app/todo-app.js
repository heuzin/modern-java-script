const todos = [{
    text: 'Workout',
    completed: true,
}, {
    text: 'Study',
    complete: true
}, {
    text: 'Play',
    complete: false
}]

const summary = document.createElement('h1')
summary.textContent = `You have ${todos.length} todos left`
document.querySelector('#todo-summary').appendChild(summary)

const sortedTodos = (todos) => {
    todos.sort((a, b) => {
        if (a.complete && !b.complete) {
            return 1
        } else if (!a.complete && b.complete) {
            return -1
        } else {
            return 0
        }
    })
}

const showTodos = (todos) => {
    todos.forEach((todo) => {
        const newEl = document.createElement('p')
        newEl.textContent = todo.text
        document.querySelector('#todo-list').appendChild(newEl)
    })  
}

sortedTodos(todos)
showTodos(todos)