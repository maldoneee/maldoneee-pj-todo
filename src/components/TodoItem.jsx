import PropTypes from 'prop-types';
import {useState} from 'react';

export const TodoItem = ({todo, index, toggleTodo, deleteTodo, editTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInputText, setEditInputText] = useState(todo.text);

  const handleEditToggle = () => {
    if (isEditing) {
      editTodo(index, editInputText); // 수정 완료 시 새로운 텍스트 저장
    }
    setIsEditing(!isEditing); // 수정 모드 전환
  };

  const handleEditChange = (e) => {
    setEditInputText(e.target.value);
  };

  return (
      <li className="todo-item">
        <div className="checkbox-and-text">
          <input
              className="todo-checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
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
        <div className="action-buttons">
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditing ? '완료' : '수정'}
          </button>
          <button className="delete-button" onClick={() => deleteTodo(index)}>삭제
          </button>
        </div>
      </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
