import {TodoForm} from './components/TodoForm.jsx';
import {TodoList} from './components/TodoList.jsx';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputText) => {
    setTodos([...todos, {id: Date.now(), text: inputText, completed: false}]);
  };

  const deleteTodo = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const editTodo = (targetId, editInputText) => {
    setTodos(
        todos.map((todo) => (todo.id === targetId ?
            {...todo, text: editInputText} :
            todo)),
    );
  };

  const toggleTodo = (targetId) => {
    setTodos(
        todos.map((todo) =>
            todo.id === targetId ? {...todo, completed: !todo.completed} : todo,
        ),
    );
  };

  return (
      <div className="todo-container">
        <h1 className="todo-title">Maldoneee To-Do List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
  );
}

export default App;
