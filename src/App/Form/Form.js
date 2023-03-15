import './Form.css';
import React, { useRef } from 'react';


export default function Form() {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;

        console.log(inputElement.value);
    }

    return (
        <div className='form'>
            <input className='todo-input' ref={inputRef} type='text' placeholder='Write a new todo'/>
            <br/>
            <button className='btn btn--blue' onClick={clickHandler}>Add todo</button>
        </div>
    );
}