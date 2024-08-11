import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => (
    <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                <span>{task.task}</span>
                <button onClick={() => onEdit(task.id)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TaskList;
