import {TodoItem} from './TodoItem.jsx';
import PropTypes from 'prop-types';

export const TodoList = ({
                           todos = [],
                           toggleTodo,
                           deleteTodo,
                           editTodo,
                           activeFilter,
                         }) => {

  return (
      <ul className="todo-list">
        {activeFilter === 'all' ?
            todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            )) :
            todos.filter(todo => activeFilter === 'completed' ?
                todo.completed :
                !todo.completed).
                map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
        }
      </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string,
};
