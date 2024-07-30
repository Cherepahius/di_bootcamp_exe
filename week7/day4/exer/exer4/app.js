import { todolist } from "./todo.js";

const mytodolist = new todolist();
mytodolist.addTask("Learn JavaScript");
mytodolist.addTask("Learn React");
mytodolist.addTask("Learn Node");
mytodolist.markTaskCompleted("Learn Node");

const tasks = mytodolist.listTasks();
console.log(tasks);

