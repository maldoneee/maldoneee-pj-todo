import {completionFilters} from '../../constants/index.js';
import useTodoStore from '../../store/todoStore.js';

const TodoFilterComplete = () => {
  const {activeFilter, setActiveFilter} = useTodoStore();

  const handleFilterClick = (key) => {
    setActiveFilter(key);
  };

  return (
      <div className="filter-container">
        <span>완료 상태:</span>
        {completionFilters.map(({key, label}) => (
            <button className="filter-button"
                    key={key}
                    onClick={() => handleFilterClick(key)}
                    data-filter={key}
                    aria-pressed={activeFilter ===
                        key}>{label}</button>
        ))}
      </div>
  );
};

export default TodoFilterComplete;
