const addBtn = document.querySelector('#add-button');
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#todo-input');

function clearInput() {
  input.value = '';
  input.focus();
}

function isInputEmpty() {
  return input.value.trim() === '';
}

function addTodoItem() {
  if (isInputEmpty()) {
    alert('할 일을 입력해주세요.');
    return;
  }
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const textDiv = createTextDiv(input.value);
  todoItem.appendChild(textDiv);

  const actionButtonsDiv = createActionButtons();
  todoItem.appendChild(actionButtonsDiv);

  todoList.appendChild(todoItem);
  clearInput();
}

function createTextDiv(text) {
  const textDiv = document.createElement('div');
  textDiv.classList.add('checkbox-and-text');

  const todoCheckBox = document.createElement('input');
  todoCheckBox.type = 'checkbox';
  todoCheckBox.classList.add('todo-checkbox');

  const todoText = document.createElement('span');
  todoText.classList.add('todo-text');
  todoText.textContent = text;

  textDiv.append(todoCheckBox, todoText);
  return textDiv;
}

function createActionButtons() {
  const actionButtonsDiv = document.createElement('div');
  actionButtonsDiv.classList.add('action-buttons');
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.textContent = '수정';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '삭제';

  actionButtonsDiv.append(editButton, deleteButton);
  return actionButtonsDiv;
}

function toggleTodoChecked(target) {
  const todoText = target.closest('.todo-item').
      querySelector('.todo-text');
  todoText.classList.toggle('todo-checked', target.checked);
}

function deleteTodoItem(target) {
  let todoItem = target.closest('.todo-item');
  todoList.removeChild(todoItem);
}

function editTodoItem(editButton) {
  const todoItem = editButton.closest('.todo-item');
  const textDiv = todoItem.querySelector('.checkbox-and-text');

  if (todoItem.classList.contains('editing')) {
    const todoEditInput = todoItem.querySelector('.edit-input');
    const updatedText = document.createElement('span');
    updatedText.classList.add('todo-text');
    updatedText.textContent = todoEditInput.value;

    textDiv.replaceChild(updatedText, todoEditInput);
    todoItem.classList.remove('editing');
    input.focus();
  } else {
    const todoText = todoItem.querySelector('.todo-text');
    const todoEditInput = document.createElement('input');
    todoEditInput.classList.add('edit-input');
    todoEditInput.value = todoText.textContent;

    textDiv.replaceChild(todoEditInput, todoText);
    todoItem.classList.add('editing');
    todoEditInput.focus();
  }
  editButton.textContent = todoItem.classList.contains('editing') ? '완료' : '수정';
}

addBtn.addEventListener('click', addTodoItem);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoItem();
});

todoList.addEventListener('change', (event) => {
  if (event.target.classList.contains('todo-checkbox')) {
    toggleTodoChecked(event.target);
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    deleteTodoItem(event.target);
  } else if (event.target.classList.contains('edit-button')) {
    editTodoItem(event.target);
  }
});

todoList.addEventListener('keypress', (event) => {
  if (event.target.classList.contains('edit-input') && event.key === 'Enter') {
    const editButton = event.target.closest('.todo-item').
        querySelector('.edit-button');
    editTodoItem(editButton);
  }
});
