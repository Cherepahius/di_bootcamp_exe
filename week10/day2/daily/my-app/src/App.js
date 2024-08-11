import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from './redux/tasksSlice';
import DatePicker from './components/DatePicker';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    if (taskToEdit) {
      dispatch(editTask({ day: selectedDay, taskId: taskToEdit.id, updatedTask: { task } }));
      setTaskToEdit(null); // Reset after editing
    } else {
      dispatch(addTask({ day: selectedDay, task: { id: Date.now(), task, completed: false } }));
    }
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    setTaskToEdit(task);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ day: selectedDay, taskId }));
  };

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <DatePicker onDateSelect={setSelectedDay} />
      <TaskForm onSave={handleAddTask} initialTask={taskToEdit ? taskToEdit.task : ''} />
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
