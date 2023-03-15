import './Todo.css';
import { useState } from 'react';

const Todo = () => {
    const initialTodos = [{'id':0, 'task': 'Take out the trash'}, {'id':1, 'task': 'Feed the cat'}, {'id':2, 'task': 'Check emails'}]
    const [todos, setTodo] = useState(initialTodos);

    function handleClick(event){
        event.preventDefault();
        let todo = document.querySelector("#todo");
        
        if(todo.value === "")return;

        // Generate id
        const id = todos.length - 1;

        // Updete state
        setTodo([...todos, {'id':id, 'task':todo.value}]);

        // Empty field
        todo.value = "";
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
                        <li className='todo' key={todo.id}> <input type='checkbox'/>{todo.task}</li>
                    ))}
                </ul>
            </div>
        </div>;
};

export default Todo;