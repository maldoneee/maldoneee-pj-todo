import PropTypes from 'prop-types';
import {priorityFilters} from '../../constants/index.js';

const TodoFilterPriority = ({priorityFilter = 'medium', setPriorityFilter}) => {
  const handleFilterClick = (key) => {
    if (key !== priorityFilter) {
      setPriorityFilter(key);
    }
  };

  return (
      <div className="filter-container">
        <span>우선순위:</span>
        {[{'key': 'all', 'label': '모든 항목'}, ...priorityFilters].map(
            ({key, label}) => (
                <button className="filter-button"
                        key={key}
                        onClick={() => handleFilterClick(
                            key)}
                        data-filter={key}
                        aria-pressed={priorityFilter === key}>{label}
                </button>
            ))}
      </div>
  );
};

export default TodoFilterPriority;

TodoFilterPriority.propTypes = {
  priorityFilter: PropTypes.string,
  setPriorityFilter: PropTypes.func.isRequired,
};
