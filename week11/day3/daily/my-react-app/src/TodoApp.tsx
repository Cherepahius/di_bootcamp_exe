import React, { useState } from 'react';
import { Todo } from './types';
import List from './List';

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = () => {
        const newTodo: Todo = {
            id: todos.length + 1,
            text: `New Todo ${new Date().toLocaleTimeString()}`
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={addTodo}>Add Todo</button>
            <List<Todo>
                items={todos}
                renderItem={(todo) => <span>{todo.text}</span>}
            />
        </div>
    );
}

export default TodoApp;