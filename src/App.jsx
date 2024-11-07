import {TodoForm} from './components/TodoForm.jsx';
import {TodoList} from './components/TodoList.jsx';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputText) => {
    setTodos([...todos, {text: inputText, completed: false}]);
  };

  const deleteTodo = (targetIndex) => {
    setTodos(todos.filter((_, index) => index !== targetIndex));
  };

  const editTodo = (index, editInputText) => {
    setTodos(
        todos.map((todo, i) =>
            i === index ? {...todo, text: editInputText} : todo,
        ),
    );
  };

  const toggleTodo = (index) => {
    setTodos(
        todos.map((todo, i) =>
            i === index ? {...todo, completed: !todo.completed} : todo,
        ),
    );
  };

  return (
      <div className="todo-container">
        <h1 className="todo-title">Maldoneee To-Do List</h1>
        <TodoForm addTodoItem={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
  );
}

export default App;
