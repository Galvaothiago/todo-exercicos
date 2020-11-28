const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todoUlContainer = document.querySelector('.todos-container')

// console.log(inputSearchTodo)

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    if (inputValue.length) {
        todoUlContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`
        event.target.reset()
    }
})

todoUlContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const deleteToDo = Array.from(clickedElement.classList).includes('delete')

    if (deleteToDo) {
        clickedElement.parentElement.remove()
    }
})

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todoUlContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('hidden')
    })

    Array.from(todoUlContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })
})
