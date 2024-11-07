import {TodoItem} from './TodoItem.jsx';
import PropTypes from 'prop-types';

export const TodoList = ({
                           todos = [],
                           toggleTodo,
                           deleteTodo,
                           editTodo,
                         }) => {

  return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                todo={todo}
                index={index}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        ))}
      </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
