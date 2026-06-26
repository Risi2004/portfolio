import { useEffect, useRef, useState } from 'react';
import { stats } from '../../data/stats';
import StatItem from './StatItem';
import './StatsBar.css';

function StatsBar() {
  const barRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="stats-bar">
      {stats.map(({ target, suffix, label }) => (
        <StatItem
          key={label}
          target={target}
          suffix={suffix}
          label={label}
          started={started}
        />
      ))}
    </div>
  );
}

export default StatsBar;
