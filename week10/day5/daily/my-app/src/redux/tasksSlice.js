import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: uuidv4(),
                title: action.payload.title,
                completed: false,
            });
        },
        editTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
            }
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;