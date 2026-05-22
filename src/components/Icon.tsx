import type { FC, JSX } from 'react';
import { useWeather } from './FetchData';
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Moon,
  Sun,
} from 'lucide-react';
import './Icon.css';

type Props = {
  size: number;
  icon: string;
  time?: string;
};

const Icon: FC<Props> = ({ size, icon, time }) => {
  const { isDay } = useWeather();

  const isDayTime = (timeStr?: string): boolean => {
    if (!timeStr) return isDay; // fallback

    // timeStr = "1500" or "300" from API
    const padded = String(timeStr).padStart(4, '0'); // "0300"
    const hour24 = parseInt(padded.slice(0, 2)); // 3, 15, 0

    return hour24 >= 6 && hour24 < 18; // 6am-6pm day
  };

  let day = isDay;

  if (time) {
    day = isDayTime(time);
  }

  const iconMap: Record<string, JSX.Element> = {
    SunIcon: day ? <Sun size={size} /> : <Moon size={size} className="icon" />,
    CloudSunIcon: day ? <CloudSun size={size} /> : <CloudMoon size={size} className="icon" />,
    CloudIcon: <Cloud size={size} className="icon" />,
    CloudyIcon: <Cloudy size={size} className="icon" />,
    CloudFogIcon: <CloudFog size={size} className="icon" />,
    CloudSunRainIcon: day ? (
      <CloudSunRain size={size} />
    ) : (
      <CloudMoonRain size={size} className="icon" />
    ),
    CloudDrizzleIcon: <CloudDrizzle size={size} className="icon" />,
    CloudHailIcon: <CloudHail size={size} className="icon" />,
    CloudRainWindIcon: <CloudRainWind size={size} className="icon" />,
    CloudSnowIcon: <CloudSnow size={size} className="icon" />,
    CloudLightningIcon: (
      <div className="mix-diagonal" style={{ width: size, height: size }}>
        <CloudRainWind size={size * 0.6} className="top-left" />
        <CloudLightning size={size * 0.6} className="bottom-right" />
      </div>
    ),
    CloudSnowLightningIcon: (
      <div className="mix-diagonal" style={{ width: size, height: size }}>
        <CloudSnow size={size * 0.6} className="top-left" />
        <CloudLightning size={size * 0.6} className="bottom-right" />
      </div>
    ),
  };

  return iconMap[icon];
};

export default Icon;
