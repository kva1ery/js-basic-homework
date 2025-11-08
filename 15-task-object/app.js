const ToDoList = {
    tasks: [],
    getNextId() {
        return this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    },
    addTask(title, priority=1) {
        this.tasks.push({ id: this.getNextId(), title, priority });
    },
    updateTask(id, title, priority) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.title = title ?? task.title;
            task.priority = priority ?? task.priority;
        }
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    },
    sortTasksByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
};

ToDoList.addTask('task3', 3);
ToDoList.addTask('task2', 2);
ToDoList.addTask('task1', 3);
console.log(ToDoList.tasks);

ToDoList.deleteTask(2);
console.log(ToDoList.tasks);

ToDoList.updateTask(3, null, 1);
console.log(ToDoList.tasks);

ToDoList.sortTasksByPriority();
console.log(ToDoList.tasks);