import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const AddTask = ({ selectedDay }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = { id: Date.now(), title: taskTitle };
        dispatch(addTask({ day: selectedDay.toDateString(), task: newTask }));
        setTaskTitle('');
    };

    return (
        <div>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
