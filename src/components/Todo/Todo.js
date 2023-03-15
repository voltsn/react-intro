import './Todo.css';
import trashIcon from '../../trash.svg';
import { useState } from 'react';
import Form from '../Form/Form';

const Todo = () => {
    const initialTodos = [{'id':crypto.randomUUID(), 'task': 'Take out the trash', 'completed':true}, {'id':crypto.randomUUID(), 'task': 'Feed the cat', 'completed':false}, {'id':crypto.randomUUID(), 'task': 'Check emails', 'completed':true}]
    const [todos, setTodo] = useState(initialTodos);

    function handleClick(event){
        event.preventDefault();
        let todo = document.querySelector("#todo");
        
        if(todo.value === "")return;

        // Generate id
        const id = crypto.randomUUID();

        // Updete state
        setTodo([...todos, {'id':id, 'task':todo.value}]);

        // Empty field
        todo.value = "";
    }

    function deleteTodo(event) {
        const id = event.target.parentNode.dataset.id;
        const updatedTodos = todos.filter((todo) => todo.id !== id);

        setTodo(updatedTodos);
    }

    return <div className='container'>
            <Form />
            <div>
                <h2 className="sub_heading">Todos</h2>
                <ul className='todolist'>
                    {todos.map(todo => (
                        <li className='todo' key={todo.id} data-id={todo.id}>
                            <input type='checkbox' defaultChecked={todo.completed}/>
                            {todo.task}
                            <img className="delete-btn" onClick={deleteTodo} src={trashIcon} alt="trash icon"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>;
};

export default Todo;