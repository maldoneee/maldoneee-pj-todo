import useTodoStore from '../../store/todoStore.js';

const TodoFilterSearch = () => {
  const searchFilterQuery = useTodoStore((state) => state.searchFilterQuery);
  const setSearchFilterQuery = useTodoStore(
      (state) => state.setSearchFilterQuery);

  return (
      <div className="filter-container">
        <label htmlFor="todo-search">검색 : </label>
        <input
            type="text"
            className="search-input"
            placeholder="등록된 할 일 찾기"
            id="todo-search"
            value={searchFilterQuery}
            onChange={(e) => {
              setSearchFilterQuery(e.target.value);
            }}
        />
      </div>
  );
};

export default TodoFilterSearch;
