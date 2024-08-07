import React, { useReducer, useState, useRef } from "react";
import "./TodoList.css";

function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), text: action.text, completed: false }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            );
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");
    const [filter, setFilter] = useState("all");
    const editInputRef = useRef(null);

    const handleAddTodo = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: "ADD_TODO", text: todoText });
        setTodoText("");
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", id });
    };

    const handleEditTodo = (id, text) => {
        dispatch({ type: "EDIT_TODO", id, text });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: "TOGGLE_TODO", id });
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "active") return !todo.completed;
        return true;
    });

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        <button
                            onClick={() => {
                                editInputRef.current.value = todo.text;
                                editInputRef.current.focus();
                                handleEditTodo(todo.id, editInputRef.current.value);
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <input type="text" ref={editInputRef} placeholder="Edit todo" />
        </div>
    );
}

export default TodoList;
