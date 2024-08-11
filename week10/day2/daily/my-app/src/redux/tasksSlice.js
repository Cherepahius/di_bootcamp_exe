import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksByDay: {},
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            if (!state.tasksByDay[day]) {
                state.tasksByDay[day] = [];
            }
            state.tasksByDay[day].push(task);
        },
        editTask: (state, action) => {
            const { day, taskId, updatedTask } = action.payload;
            state.tasksByDay[day] = state.tasksByDay[day].map((task) =>
                task.id === taskId ? { ...task, ...updatedTask } : task
            );
        },
        deleteTask: (state, action) => {
            const { day, taskId } = action.payload;
            state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== taskId);
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
