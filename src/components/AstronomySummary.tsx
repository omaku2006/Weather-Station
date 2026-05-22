import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import './AstronomySummary.css';
import { useEffect, useRef, useState, type FC } from 'react';

type Props = {
  sunRise: string | undefined;
  sunSet: string | undefined;
  moonRise: string | undefined;
  moonSet: string | undefined;
  currentTime: string | undefined;
};

// "06:12 AM" → minutes
const toMinutes = (time: string): number => {
  const [timePart, period] = time.split(' ');
  const [h, m] = timePart.split(':').map(Number);
  let hour = h;
  if (period === 'PM' && h !== 12) hour += 12;
  if (period === 'AM' && h === 12) hour = 0;
  return hour * 60 + m;
};

// Progress 0 to 1
const getProgress = (rise: string, set: string, current: string): number => {
  const progress = (toMinutes(current) - toMinutes(rise)) / (toMinutes(set) - toMinutes(rise));
  return Math.min(Math.max(progress, 0), 1);
};

// SVG path pe point dhundho — t = 0 to 1
const getPointOnPath = (t: number) => {
  // Cubic bezier — same path values!
  // M 20 130 C 120 130, 180 60, 280 60 C 380 60, 440 130, 540 130
  // 2 curves chhe — pehli 0-0.5, biji 0.5-1

  const cubicBezier = (
    t: number,
    p0: [number, number],
    p1: [number, number],
    p2: [number, number],
    p3: [number, number]
  ): [number, number] => {
    const mt = 1 - t;
    return [
      mt ** 3 * p0[0] + 3 * mt ** 2 * t * p1[0] + 3 * mt * t ** 2 * p2[0] + t ** 3 * p3[0],
      mt ** 3 * p0[1] + 3 * mt ** 2 * t * p1[1] + 3 * mt * t ** 2 * p2[1] + t ** 3 * p3[1],
    ];
  };

  if (t <= 0.5) {
    // Pehli curve
    return cubicBezier(t * 2, [20, 130], [120, 130], [180, 60], [280, 60]);
  } else {
    // Biji curve
    return cubicBezier((t - 0.5) * 2, [280, 60], [380, 60], [440, 130], [540, 130]);
  }
};

const AstronomySummary: FC<Props> = ({ sunRise, sunSet, moonRise, moonSet, currentTime }) => {
  const sunPathRef = useRef<SVGPathElement>(null);
  const moonPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(1000);

  // ✅ Actual path length measure karo!
  useEffect(() => {
    if (sunPathRef.current) {
      setPathLength(sunPathRef.current.getTotalLength());
    }
  }, []);

  const sunProgress =
    sunRise && sunSet && currentTime ? getProgress(sunRise, sunSet, currentTime) : 0.5;

  const moonProgress =
    moonRise && moonSet && currentTime ? getProgress(moonRise, moonSet, currentTime) : 0.5;

  const [sunX, sunY] = getPointOnPath(sunProgress);
  const [moonX, moonY] = getPointOnPath(moonProgress);

  return (
    <div className="astronomySummary">
      {/* ☀️ Sun */}
      <div className="astroBox">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="180" viewBox="0 0 600 200">
          {/* Dashed background path */}
          <path
            d="M 20 130 C 120 130, 180 60, 280 60 C 380 60, 440 130, 540 130"
            fill="none"
            stroke="var(--fg-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* ✅ Progress path — ref sathe */}
          <path
            ref={sunPathRef}
            d="M 20 130 C 120 130, 180 60, 280 60 C 380 60, 440 130, 540 130"
            fill="none"
            stroke="var(--fg-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - sunProgress * pathLength}
            opacity="0.8"
          />

          <foreignObject x={sunX - 16} y={sunY - 16} width="32" height="32">
            <SunIcon size={32} weight="fill" className="icon sunIcon" />
          </foreignObject>

          <text
            x="20"
            y="170"
            fontSize="16"
            fontWeight="600"
            fill="var(--fg-primary)"
            textAnchor="middle"
          >
            {sunRise}
          </text>
          <text
            x="540"
            y="170"
            fontSize="16"
            fontWeight="600"
            fill="var(--fg-primary)"
            textAnchor="middle"
          >
            {sunSet}
          </text>
        </svg>
      </div>

      {/* 🌙 Moon */}
      <div className="astroBox">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="180" viewBox="0 0 600 200">
          <path
            d="M 20 130 C 120 130, 180 60, 280 60 C 380 60, 440 130, 540 130"
            fill="none"
            stroke="var(--fg-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* ✅ Moon progress path */}
          <path
            ref={moonPathRef}
            d="M 20 130 C 120 130, 180 60, 280 60 C 380 60, 440 130, 540 130"
            fill="none"
            stroke="var(--fg-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - moonProgress * pathLength}
            opacity="0.8"
          />

          <foreignObject x={moonX - 16} y={moonY - 16} width="32" height="32">
            <MoonIcon size={32} weight="fill" className="icon moonIcon" />
          </foreignObject>

          <text
            x="20"
            y="170"
            fontSize="16"
            fontWeight="600"
            fill="var(--fg-primary)"
            textAnchor="middle"
          >
            {moonRise}
          </text>
          <text
            x="540"
            y="170"
            fontSize="16"
            fontWeight="600"
            fill="var(--fg-primary)"
            textAnchor="middle"
          >
            {moonSet}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default AstronomySummary;
