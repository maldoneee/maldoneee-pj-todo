import {TodoItem} from './index.js';
import useTodoStore from '../../store/todoStore.js';
import {useMemo} from 'react';

const TodoList = () => {

  const {
    todos,
    activeFilter,
    priorityFilter,
    searchFilterQuery,
  } = useTodoStore();

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
      [todos, searchFilterQuery, activeFilter, priorityFilter]);

  return (
      <ul className="todo-list">
        {filteredTodos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
            />
        ))}
      </ul>
  );
};

export default TodoList;
