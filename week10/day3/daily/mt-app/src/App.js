import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import { addTask, editTask, deleteTask } from './features/tasks/tasksSlice';


function App() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const tasks = useSelector(state => state.tasks.tasksByDay[selectedDay.toDateString()] || []);
  const dispatch = useDispatch();

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleAddTask = (taskTitle) => {
    dispatch(addTask({ day: selectedDay.toDateString(), task: { id: Date.now(), title: taskTitle } }));
  };

  const handleEditTask = (taskId, updatedTask) => {
    dispatch(editTask({ day: selectedDay.toDateString(), taskId, updatedTask }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ day: selectedDay.toDateString(), taskId }));
  };

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <Calendar selectedDay={selectedDay} onDaySelect={handleDaySelect} />
      <TaskList selectedDay={selectedDay} />
      <AddTask selectedDay={selectedDay} onAddTask={handleAddTask} />
      {tasks.map(task => (
        <div key={task.id}>
          <EditTask selectedDay={selectedDay} task={task} onEditTask={handleEditTask} />
          <DeleteTask selectedDay={selectedDay} taskId={task.id} onDeleteTask={handleDeleteTask} />
        </div>
      ))}
    </div>
  );
}

export default App;
