function addTodo() {
    var dayInput = document.getElementById('dayInput');
    var taskInput = document.getElementById('taskInput');

    var day = dayInput.value.trim();
    var task = taskInput.value.trim();

    if (day !== "" && task !== "") {
        createTodoElement(day, task);
        dayInput.value = "";
        taskInput.value = "";
    }
}

function createTodoElement(day, task) {
    var todosList = document.getElementById('todos');

    var li = document.createElement('li');
    li.textContent = day + ' : ' + task;

    var deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.textContent = ' 🗑';
    deleteIcon.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteIcon);
    todosList.appendChild(li);
}
