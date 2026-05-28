import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AnimatedCounter = ({ value, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const numericValue = parseInt(value.replace(/,/g, ''), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setCount(Math.floor(eased * numericValue));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, numericValue]);

  const formatted = count.toLocaleString('en-IN');

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-value">
        {prefix}{formatted}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
