import './FilterBar.css';

function FilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {filters.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`filter-bar__btn ${activeFilter === id ? 'filter-bar__btn--active' : ''}`}
          onClick={() => onFilterChange(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
