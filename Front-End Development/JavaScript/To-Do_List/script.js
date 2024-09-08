document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task.text, task.completed));

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTaskToList(taskText, false);
            taskInput.value = '';
            saveTasks();
        }
    });

    function addTaskToList(text, completed) {
        const li = document.createElement('li');
        li.textContent = text;
        if (completed) li.classList.add('complete');
        
        li.addEventListener('click', () => {
            li.classList.toggle('complete');
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function saveTasks() {
        const tasks = Array.from(taskList.children).map(li => ({
            text: li.firstChild.textContent,
            completed: li.classList.contains('complete')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
