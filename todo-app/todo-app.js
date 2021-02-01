const todos = [{
    text: 'Workout',
    completed: false,
}, {
    text: 'Study',
    complete: true
}, {
    text: 'Play',
    complete: false
}]

const showTodos = (todos) => {
    todos.forEach((todo) => {
        const newEl = document.createElement('p')
        newEl.textContent = todo.text
        document.querySelector('#todo-list').appendChild(newEl)
    })
}

showTodos(todos)