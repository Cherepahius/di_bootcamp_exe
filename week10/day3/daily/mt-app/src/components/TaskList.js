import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = ({ selectedDay }) => {
    const tasks = useSelector(state => state.tasks.tasksByDay[selectedDay.toDateString()] || []);

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
};

export default TaskList;
