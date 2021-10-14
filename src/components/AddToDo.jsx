import React, {useState} from 'react';

const AddToDo = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleInput = (e) => {
        setTitle(e.target.value);
    }

    const handleClick = () => {
        onAdd(title);
        setTitle('');
    }

    return (
        <div>
            <input type='text' onInput={handleInput} value={title} />
            <button onClick={handleClick} >OK</button>
        </div>
    );
};

export default AddToDo;