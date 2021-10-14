import React from 'react';
import s from './style.module.css';

const ToDo = ({todo: { done, title, id }, onClick}) => {
    return (
        <div className={s.todo}>
            <input type="checkbox" checked={done} onClick={() => onClick(id)} />
            <span className={s.todoTitle}>{title}</span>
        </div>
    );
};

export default ToDo;