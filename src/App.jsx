import {TodoForm} from './components/TodoForm.jsx';
import {TodoList} from './components/TodoList.jsx';
import {useState} from 'react';
import TodoFilter from './components/TodoFilter.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filteredTodos = todos.filter((todo) => {
    switch (activeFilter) {
      case 'completed':
        return todo.completed;
      case 'incomplete':
        return !todo.completed;
      default: //all
        return true;
    }
  });

  return (
      <div className="todo-container">
        <h1 className="todo-title">Maldoneee To-Do List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} activeFilter={activeFilter}/>
      </div>
  );
}

export default App;
