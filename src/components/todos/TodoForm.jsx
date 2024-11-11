import {useState} from 'react';
import {priorityFilters} from '../../constants/index.js';
import useTodoStore from '../../store/todoStore.js';

const TodoForm = () => {
  const [inputText, setInputText] = useState('');
  const [inputPriority, setInputPriority] = useState('medium');

  const addTodo = useTodoStore((state) => state.addTodo);

  const isInputEmpty = () => {
    return inputText.trim() === '';
  };

  const handleTextInput = () => {
    if (isInputEmpty()) {
      alert('할 일을 입력해주세요.');
      return;
    }
    addTodo(inputText, inputPriority);
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

export default TodoForm;
