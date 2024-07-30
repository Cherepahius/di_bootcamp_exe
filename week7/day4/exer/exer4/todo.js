class todolist {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push({ task, completed: false });
    }
    markTaskCompleted(task) {
        const taskIndex = this.tasks.findIndex((t) => t.task === task);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].completed = true;
        }
    }

    listTasks() {
        return this.tasks;
    }

}

export { todolist }