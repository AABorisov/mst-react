import React from 'react';
import ToDo from "./ToDo";
import s from './style.module.css';

const ToDoList = ({ todos, onDone }) => {
    return (
        <div className={s.todoList}>
            {todos.map((todo) => (<ToDo key={todo.id} todo={todo} onClick={onDone}/>))}
        </div>
    );
};

export default ToDoList;