import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../reducers/todoReducer';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => dispatch(toggleTodo({ id: todo.id }))}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
