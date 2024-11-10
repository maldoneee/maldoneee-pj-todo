import {useState} from 'react';
import PropTypes from 'prop-types';
import {priorityFilters} from '../../constants/index.js';

export const TodoForm = ({
                           addTodo,
                           inputPriority,
                           setInputPriority,
                         }) => {
  const [inputText, setInputText] = useState('');

  const isInputEmpty = () => {
    return inputText.trim() === '';
  };

  const handleTextInput = () => {
    if (isInputEmpty()) {
      alert('할 일을 입력해주세요.');
      return;
    }
    addTodo(inputText);
    setInputText('');
  };

  return (
      <div className="todo-input-container">
        <label htmlFor="todo-input">할 일:</label>
        <input type="text" value={inputText} onChange={(e) => setInputText(
            e.target.value)} id="todo-input"/>
        <select
            className="priority-select"
            value={inputPriority}
            onChange={(e) => {
              setInputPriority(e.target.value);
              console.log(e.target.value);
            }}
        >
          {priorityFilters.map((option) => (
              <option key={option.key}
                      value={option.key}>{option.label}</option>
          ))}
        </select>
        <button className="add-button" onClick={handleTextInput}
                id="add-button">추가</button>
      </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  inputPriority: PropTypes.string.isRequired,
  setInputPriority: PropTypes.func.isRequired,
};
