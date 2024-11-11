import {useState} from 'react';
import {priorityFilters} from '../../constants/index.js';
import useTodoStore from '../../store/todoStore.js';
import PropTypes from 'prop-types';

const TodoItem = ({todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInputText, setEditInputText] = useState('');

  const {deleteTodo, toggleTodo, editTodo} = useTodoStore();

  const handleEditToggle = () => {
    if (isEditing) {
      editTodo(todo.id, editInputText); // 수정 완료 시 새로운 텍스트 저장
    } else {
      setEditInputText(todo.text);
    }
    setIsEditing(!isEditing); // 수정 모드 전환
  };

  const handleEditChange = (e) => {
    setEditInputText(e.target.value);
  };

  const getPriorityLabel = (priority) => {
    const priorityObj = priorityFilters.find(
        (filter) => filter.key === priority);
    return priorityObj ? priorityObj.label : priority; // label이 없으면 기본값 반환
  };

  return (
      <li className="todo-item">
        <div className="checkbox-and-text">
          <input
              className="todo-checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
          />
          {isEditing ? (
              <input
                  type="text"
                  value={editInputText}
                  onChange={handleEditChange}
              />
          ) : (
              <span className="todo-text" style={{
                textDecoration: todo.completed ?
                    'line-through' :
                    'none',
              }}>
          {todo.text}
        </span>
          )}
        </div>
        <span className={`todo-priority ${todo.priority}`}>
                {getPriorityLabel(todo.priority)}
        </span>
        <div className="action-buttons">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditing ? '완료' : '수정'}
          </button>
          <button className="delete-button" onClick={() => deleteTodo(
              todo.id)}>삭제
          </button>
        </div>
      </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};
