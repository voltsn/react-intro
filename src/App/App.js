import { useState, useRef, useEffect } from 'react';
import Header from './Header/Header';
import Todo from './Todo/Todo';
import Form from "./Form/Form";

const LSKEY = 'MyTodoApp';

function App() {
  // If there are todos in localstorage retrieve them or set inital todos to an empty array
  const initialTodos = JSON.parse(localStorage.getItem(LSKEY + '.todos')) || [];

  const [todos, setTodos] = useState(initialTodos);
  const inputRef = useRef();

  function handleSubmit() {
    const inputElement = inputRef.current;
    if (inputElement.value === "") return;
    
    const newTodo = {'id': crypto.randomUUID(), 'task': inputElement.value, 'completed': false};
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(event) {
    const id = event.target.parentNode.dataset.id;
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  function toggleStatus(event) {
    const id = event.target.parentNode.dataset.id;

    // Deep copy the todos array
    const todosCopy = JSON.parse(JSON.stringify(todos));

    for (let i = 0; i < todosCopy.length; i++) {
      if (todosCopy[i].id === id) {

        // Update completion status
        todosCopy[i].completed = todosCopy[i].completed ? false : true;
        break;
      }
    }

    // Update state
    setTodos(todosCopy);
  }

  // Store todos in localstorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Form inputRef={inputRef} onClick={handleSubmit} />
      <Todo todos={todos} onClick={deleteTodo} onChange={toggleStatus}/>
    </>
  );
}

export default App;
