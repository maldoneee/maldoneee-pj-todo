import {TodoItem} from './index.js';
import PropTypes from 'prop-types';

const TodoList = ({
                    todos = [],
                    toggleTodo,
                    deleteTodo,
                    editTodo,
                  }) => {

  return (
      <ul className="todo-list">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        ))}
      </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType(
            [PropTypes.number, PropTypes.string]).isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
      }),
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
