import { useEffect, useState } from 'react';

const DURATION = 4500;

function useCountUp(target, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, started]);

  return count;
}

function StatItem({ target, suffix, label, started }) {
  const count = useCountUp(target, started);

  return (
    <div className="stats-bar__item">
      <span className="stats-bar__value">
        {count}{suffix}
      </span>
      <span className="stats-bar__label">{label}</span>
    </div>
  );
}

export default StatItem;
