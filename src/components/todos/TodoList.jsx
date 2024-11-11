import {TodoItem} from './index.js';
import useTodoStore from '../../store/todoStore.js';

const TodoList = () => {

  const {
    filteredTodos,
  } = useTodoStore();

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
