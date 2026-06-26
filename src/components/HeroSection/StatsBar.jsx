import { stats } from '../../data/stats';
import './StatsBar.css';

function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map(({ value, label }) => (
        <div key={label} className="stats-bar__item">
          <span className="stats-bar__value">{value}</span>
          <span className="stats-bar__label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;
