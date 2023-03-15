import './Form.css';
import React, { useRef } from 'react';


export default function Form({inputRef, onClick}) {

    return (
        <div className='form'>
            <input className='todo-input' ref={inputRef} type='text' placeholder='Write a new todo'/>
            <br/>
            <button className='btn btn--blue' onClick={onClick}>Add todo</button>
        </div>
    );
}