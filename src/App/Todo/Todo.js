import './Todo.css';
import trashIcon from '../../trash.svg';

const Todo = ({todos, onClick, onChange}) => {

    return <div className='container'>
            <div>
                <h2 className="sub_heading">Todos</h2>
                <ul className='todolist'>
                    {todos.map(todo => (
                        <li className='todo' key={todo.id} data-id={todo.id}>
                            <input type='checkbox' defaultChecked={todo.completed} onChange={onChange} />
                            {todo.task}
                            <img className="delete-btn" onClick={onClick} src={trashIcon} alt="trash icon"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>;
};

export default Todo;