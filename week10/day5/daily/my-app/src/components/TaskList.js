import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/tasksSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handleEditTask = (id, title) => {
        setEditingTaskId(id);
        setNewTitle(title);
    };

    const handleSaveTask = (id) => {
        dispatch(editTask({ id, title: newTitle }));
        setEditingTaskId(null);
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            <button onClick={() => handleSaveTask(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                onClick={() => dispatch(toggleTaskCompletion({ id: task.id }))}
                            >
                                {task.title}
                            </span>
                            <button onClick={() => handleEditTask(task.id, task.title)}>Edit</button>
                            <button onClick={() => dispatch(deleteTask({ id: task.id }))}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;