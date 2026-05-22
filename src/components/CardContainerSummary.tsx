import { weatherCode } from '../scripts/Constants';
import type { FC } from 'react';
import Icon from './Icon';
import './CardContainerSummary.css';
import AnimatedNumber from './AnimatedNumber';

type Props = {
  time: string;
  code: string;
  tempC: string;
  tempF: string;
  tempUnit: 'C' | 'F';
  FeelsLikeC: string;
  FeelsLikeF: string;
};

const CardContainerSummary: FC<Props> = ({
  time,
  code,
  tempC,
  tempF,
  tempUnit,
  FeelsLikeC,
  FeelsLikeF,
}) => {
  const formatHourlyTime = (timeStr: string) => {
    if (!timeStr) return '--:--'; // guard

    const padded = timeStr.padStart(4, '0'); // "300" → "0300"
    const hour = parseInt(padded.slice(0, 2));
    const minute = padded.slice(2);

    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;

    return `${hour12}:${minute} ${ampm}`; // "3:00 AM"
  };

  return (
    <article className="card">
      <div className="cardTop">
        <p>{formatHourlyTime(time)}</p>
        <Icon size={32} time={time} icon={weatherCode[code]?.icon} />
      </div>
      <div className="cardMiddle">
        <h3>
          <AnimatedNumber
            value={tempUnit === 'C' ? parseInt(tempC) : parseInt(tempF)}
            duration={2}
          />
          &deg;{tempUnit}
        </h3>
        <p>
          Feels Like :&nbsp;
          <AnimatedNumber
            value={tempUnit === 'C' ? parseInt(FeelsLikeC) : parseInt(FeelsLikeF)}
            duration={2}
          />
          &deg;{tempUnit}
        </p>
      </div>
    </article>
  );
};

export default CardContainerSummary;
