import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, initialTask = '' }) => {
    const [task, setTask] = useState(initialTask);

    useEffect(() => {
        setTask(initialTask);
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;
