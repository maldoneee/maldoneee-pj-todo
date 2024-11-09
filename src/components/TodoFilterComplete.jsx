import PropTypes from 'prop-types';
import {completionFilters} from '../constants/index.js';

const TodoFilterComplete = ({activeFilter = 'all', setActiveFilter}) => {

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

TodoFilterComplete.propTypes = {
  activeFilter: PropTypes.string,
  setActiveFilter: PropTypes.func.isRequired,
};
