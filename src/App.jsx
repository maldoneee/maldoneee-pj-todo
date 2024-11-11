import {TodoForm, TodoList} from './components/todos/index.js';
import {
  TodoFilterComplete,
  TodoFilterPriority,
  TodoFilterSearch,
} from './components/filters/index.js';

function App() {

  return (
      <div className="todo-container">
        <h1 className="todo-title">Maldoneee To-Do List</h1>
        <TodoForm/>
        <div className="todo-filter-container">
          <TodoFilterSearch/>
          <TodoFilterComplete/>
          <TodoFilterPriority/>
        </div>
        <TodoList/>
      </div>
  );
}

export default App;
