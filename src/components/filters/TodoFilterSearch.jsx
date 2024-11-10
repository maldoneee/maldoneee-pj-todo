import PropTypes from 'prop-types';

const TodoFilterSearch = ({searchFilterQuery = '', setSearchFilterQuery}) => {
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

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

TodoFilterSearch.propTypes = {
  searchFilterQuery: PropTypes.string,
  setSearchFilterQuery: PropTypes.func,
};
