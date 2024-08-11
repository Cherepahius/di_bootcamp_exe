import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';

const DeleteTask = ({ selectedDay, taskId }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask({ day: selectedDay.toDateString(), taskId }));
    };

    return (
        <button onClick={handleDeleteTask}>Delete Task</button>
    );
};

export default DeleteTask;
