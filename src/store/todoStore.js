import {create} from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  activeFilter: 'all',
  priorityFilter: 'all',
  searchFilterQuery: '',

  addTodo: ((text, priority) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {id: Date.now(), text, completed: false, priority},
        ],
      }))),
  deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  editTodo: (id, text) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? {...todo, text} : todo,
        ),
      })),

  toggleTodo: (targetId) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === targetId ? {...todo, completed: !todo.completed} : todo,
        ),
      })),

  setActiveFilter: (filter) => set(() => ({activeFilter: filter})),
  setPriorityFilter: (filter) => set(() => ({priorityFilter: filter})),
  setSearchFilterQuery: (query) => set(() => ({searchFilterQuery: query})),
}));

export default useTodoStore;
