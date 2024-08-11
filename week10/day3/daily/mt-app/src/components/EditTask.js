import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

const EditTask = ({ selectedDay, task }) => {
    const [taskTitle, setTaskTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        dispatch(editTask({ day: selectedDay.toDateString(), taskId: task.id, updatedTask: { title: taskTitle } }));
    };

    return (
        <div>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleEditTask}>Edit Task</button>
        </div>
    );
};

export default EditTask;
