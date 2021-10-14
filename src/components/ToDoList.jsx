import React from 'react';
import ToDo from "./ToDo";
import s from './style.module.css';
import {observer} from "mobx-react-lite";
import AddToDo from "./AddToDo";

const ToDoList = ({ todos }) => {
    const handleAdd = (title) => {
        todos.addTodo(title)
    }

    return (
        <div className={s.todoList}>
            <AddToDo onAdd={handleAdd} />
            {todos.todos.map((todo) => (<ToDo key={todo.id} todo={todo} />))}
        </div>
    );
};

export default observer(ToDoList);