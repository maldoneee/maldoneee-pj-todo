import {priorityFilters} from '../../constants/index.js';
import useTodoStore from '../../store/todoStore.js';

const TodoFilterPriority = () => {
  const {priorityFilter, setPriorityFilter} = useTodoStore();
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
