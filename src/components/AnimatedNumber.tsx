import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  // ✅ NaN check — 0 fallback!
  const safeValue = isNaN(value) || !isFinite(value) ? 0 : value;

  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const step = safeValue / (duration * 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= safeValue) {
              setDisplayValue(safeValue);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [safeValue, duration, hasAnimated]);

  useEffect(() => {
    setHasAnimated(false);
    setDisplayValue(0);
  }, [safeValue]);

  return <span ref={ref}>{displayValue}</span>;
};

export default AnimatedNumber;
