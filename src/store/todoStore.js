import {create} from 'zustand';

const initialState = {
  todos: [],
  activeFilter: 'all',
  priorityFilter: 'all',
  searchFilterQuery: '',
};

const useTodoStore = create((set, get) => ({
  ...initialState,

  reset: () => set(initialState),

  filteredTodos: () => {
    const {todos, activeFilter, priorityFilter, searchFilterQuery} = get();
    return todos
        .filter((todo) =>
            searchFilterQuery === ''
                ?
                true
                :
                todo.text.toLowerCase()
                    .includes(searchFilterQuery.toLowerCase()),
        )
        .filter((todo) => priorityFilter === 'all' || todo.priority ===
            priorityFilter)
        .filter((todo) => {
          switch (activeFilter) {
            case 'completed':
              return todo.completed;
            case 'incomplete':
              return !todo.completed;
            default:
              return true;
          }
        });
  },

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
