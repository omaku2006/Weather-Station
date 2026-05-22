import { useEffect, useRef, useState, type FC } from 'react';

type Props = {
  value: number;
  duration?: number;
};

const AnimatedNumber: FC<Props> = ({ value, duration = 1 }) => {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = display;
    const end = value;
    const diff = end - start;
    if (diff === 0) return;
    // steps used for step time calculation
    const _steps = Math.abs(diff);
    void _steps;
    const stepTime = Math.max(duration * 50, 16);
    let current = start;
    const dir = diff > 0 ? 1 : -1;

    const tick = () => {
      current += dir;
      setDisplay(current);
      if (current !== end) {
        rafRef.current = window.setTimeout(tick, stepTime);
      }
    };

    rafRef.current = window.setTimeout(tick, stepTime);
    return () => clearTimeout(rafRef.current);
  }, [value]);

  return <>{display}</>;
};

export default AnimatedNumber;
