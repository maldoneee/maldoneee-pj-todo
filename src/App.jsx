import {TodoForm} from './components/TodoForm.jsx';
import {TodoList} from './components/TodoList.jsx';
import {useEffect, useMemo, useState} from 'react';
import TodoFilterComplete from './components/TodoFilterComplete.jsx';
import TodoFilterPriority from './components/TodoFilterPriority.jsx';
import TodoFilterSearch from './components/TodoFilterSearch.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputPriority, setInputPriority] = useState('medium');
  const [activeFilter, setActiveFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState('');

  const addTodo = (inputText) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputText,
        completed: false,
        priority: inputPriority,
      }]);
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
    setTodos(todos.map((todo) =>
            todo.id === targetId ? {...todo, completed: !todo.completed} : todo,
        ),
    );
  };
  useEffect(() => {

  }, [todos]);

  const filteredTodos = useMemo(() =>
          todos.filter((todo) => searchFilterQuery === '' ? todo :
              todo.text.toLowerCase().includes(searchFilterQuery.toLowerCase()))
               .filter((todo) => priorityFilter ===
                   'all' || todo.priority ===
                   priorityFilter)
               .filter((todo) => {
                     switch (activeFilter) {
                       case 'completed':
                         return todo.completed;
                       case 'incomplete':
                         return !todo.completed;
                       default: //all
                         return true;
                     }
                   },
               ),
      [searchFilterQuery, todos, activeFilter, priorityFilter]);

  return (
      <div className="todo-container">
        <h1 className="todo-title">Maldoneee To-Do List</h1>
        <TodoForm addTodo={addTodo} inputPriority={inputPriority}
                  setInputPriority={setInputPriority}/>
        <div className="todo-filter-container">
          <TodoFilterSearch searchFilterQuery={searchFilterQuery}
                            setSearchFilterQuery={setSearchFilterQuery}/>
          <TodoFilterComplete activeFilter={activeFilter}
                              setActiveFilter={setActiveFilter}/>
          <TodoFilterPriority priorityFilter={priorityFilter}
                              setPriorityFilter={setPriorityFilter}/>
        </div>
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo} editTodo={editTodo}
                  activeFilter={activeFilter}/>
      </div>
  );
}

export default App;
