const todos = [{
    text: 'Workout',
    completed: true,
}, {
    text: 'Study',
    completed: true
}, {
    text: 'Play',
    completed: false
}, {
    text: 'buy food',
    completed: false
}]

const filters = {
    searchText: ''
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompletedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = '';

    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompletedTodos.length} todos left`
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach((todo) => {
        const newEl = document.createElement('p')
        newEl.textContent = todo.text
        document.querySelector('#todo-list').appendChild(newEl)
    })  
}

renderTodos(todos, filters)

// const sortedTodos = (todos) => {
//     todos.sort((a, b) => {
//         if (a.completed && !b.completed) {
//             return 1
//         } else if (!a.completed && b.completed) {
//             return -1
//         } else {
//             return 0
//         }
//     })
// }

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})