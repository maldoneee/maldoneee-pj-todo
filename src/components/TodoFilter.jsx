import PropTypes from 'prop-types';

const TodoFilter = ({activeFilter, setActiveFilter}) => {

  const filters = [
    {key: 'all', label: '모든 항목'},
    {key: 'completed', label: '완료'},
    {key: 'incomplete', label: '미완료'}];
  
  const handleFilter = (filterKey) => {
    setActiveFilter(filterKey);
  };

  return (
      <div className="filter-container">
        {filters.map(({key, label}) => (
            <button className="filter-button" key={key} onClick={() => handleFilter(
                key)} data-filter={key} aria-pressed={activeFilter ===
                key}>{label}</button>
        ))}
      </div>
  );
};

export default TodoFilter;

TodoFilter.propTypes = {
  activeFilter: PropTypes.string,
  setActiveFilter: PropTypes.func.isRequired,
};
