const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();

    // Whenever we update the todo list, save in localStorage.
    saveToStorage();
}

function renderTodoList() {
    let todoListHTML = '';

    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;

        todoListHTML += `
        <div class="name-task">${name}</div>
        <div class="due-date-task">${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();

            // Whenever we update the todo list, save in localStorage.
            
            saveToStorage();
        " class="delete-todo-button">Delete</button>
        `;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}