import './Todo.css';
import trashIcon from '../../trash.svg';
import { useState } from 'react';

const Todo = () => {
    const initialTodos = [{'id':crypto.randomUUID(), 'task': 'Take out the trash'}, {'id':crypto.randomUUID(), 'task': 'Feed the cat'}, {'id':crypto.randomUUID(), 'task': 'Check emails'}]
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
            <form className='form'>
                <input className='todo-input' id="todo"type="text" name="todo" placeholder='Type a new todo'/>
                <button className='btn btn--blue' onClick={handleClick}>Add Todo</button>
            </form>
            <div>
                <h2 className="sub_heading">Todos</h2>
                <ul className='todolist'>
                    {todos.map(todo => (
                        <li className='todo' key={todo.id} data-id={todo.id}>
                            <input onClick={hanld} type='checkbox'/>
                            {todo.task}
                            <img className="delete-btn" onClick={deleteTodo} src={trashIcon} alt="trash icon"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>;
};

export default Todo;