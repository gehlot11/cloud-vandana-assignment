// Get tasks from local storage
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const tasks = getTasksFromLocalStorage();
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);
    taskInput.value = "";
    refreshTaskList(tasks);
}

// Refresh and display task list
function refreshTaskList(tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}" onclick="toggleTask(${task.id})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Mark task as completed/uncompleted
function toggleTask(id) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed; // Toggle completion status
        }
        return task;
    });

    saveTasksToLocalStorage(updatedTasks);
    refreshTaskList(updatedTasks);
}

// Delete a task
function deleteTask(id) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id !== id);
    saveTasksToLocalStorage(tasks);
    refreshTaskList(tasks);
}

// Clear completed tasks
function clearCompleted() {
    let tasks = getTasksFromLocalStorage();
    // Remove completed tasks
    tasks = tasks.filter(task => !task.completed);
    saveTasksToLocalStorage(tasks);
    refreshTaskList(tasks);
    alert("Completed tasks cleared successfully!");
}

// Clear all tasks
function clearAllTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        localStorage.removeItem("tasks");
        refreshTaskList([]);
    }
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", () => {
    const tasks = getTasksFromLocalStorage();
    refreshTaskList(tasks);
});
