import React from 'react';
import s from './style.module.css';
import {observer} from "mobx-react-lite";

const ToDo = ({todo: { done, title, toggle }}) => {
    const handleClick = () => {
        toggle()
    }
    return (
        <div className={s.todo}>
            <input type="checkbox" checked={done} onChange={handleClick} />
            <span className={s.todoTitle}>{title}</span>
        </div>
    );
};

export default observer(ToDo);