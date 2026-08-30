import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import { weatherCode, type WeatherResponse } from '../scripts/Constants';
import axios from 'axios';

type WeatherContextType = {
  data: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  weatherImage: string;
  weatherImageSource: string;
  icon: string;
  isDay: boolean;
  location: string;
  weatherDesc: string;
  dateTime: { date: string; time: string; dayOfWeek: string } | null;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  city: string;
}

const WeatherProvider: FC<Props> = ({ children, city }) => {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [img, setImg] = useState<string>('');
  const [source, setSource] = useState<string>('');
  const [icon, setIcon] = useState<string>('SunIcon');
  const [isDay, setDay] = useState<boolean>(true);
  const [desc, setDesc] = useState<string>('');
  const [dateTime, setDateTime] = useState<{
    date: string;
    time: string;
    dayOfWeek: string;
  } | null>(null);

  // 1️⃣ Cache-busting proxy URL
  const proxy = 'https://api.cors.syrins.tech/?url='; // or allorigins

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      // ✅ &_=Date.now() prevents proxy caching!
      const res = await axios.get(`${proxy}https://wttr.in/${city}?format=j1&_=${Date.now()}`);
      const body = res?.data;
      const isValid =
        body &&
        typeof body === 'object' &&
        Array.isArray(body.current_condition) &&
        Array.isArray(body.weather) &&
        Array.isArray(body.nearest_area) &&
        body.current_condition.length > 0 &&
        body.weather.length > 0;
      if (!isValid) {
        setData(null);
        setError(
          `Oops, we couldn't find "${city}". Please double-check the city name and try again.`
        );
      } else {
        setData(body as WeatherResponse);
      }
    } catch (e: any) {
      setData(null);
      const status = e?.response?.status;
      if (status === 500 || status === 404) {
        setError(
          `Oops, we couldn't find "${city}". Please check the spelling and try again.`
        );
      } else if (e?.response) {
        setError(`Weather service returned an error (${status}). Please try again.`);
      } else {
        setError('Network error. Please check your internet connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [city, proxy]);

  // 2️⃣ Reset & Fetch on City Change
  useEffect(() => {
    setData(null);
    setDateTime(null);
    setImg('');
    setDesc('');
    setError(null);
    setLoading(true);
    fetchWeather();
  }, [city]);

  // 3️⃣ Derived Values
  const code = data?.current_condition?.[0]?.weatherCode ?? null;
  const type = code ? (weatherCode[code]?.label ?? 'clear') : null;

  // 4️⃣ Fetch Date/Time
  const fetchDate = useCallback(async () => {
    if (!data?.nearest_area?.[0]) return;
    try {
      const { latitude, longitude } = data.nearest_area[0];
      const res = await axios.get(
        `https://timeapi.io/api/Time/current/coordinate?latitude=${latitude}&longitude=${longitude}`
      );
      setDateTime({
        date: res.data.date,
        time: res.data.time,
        dayOfWeek: res.data.dayOfWeek,
      });
    } catch (e: any) {
      setError((prev) => `${prev || ''} Time Error: ${e.message}`.trim());
    }
  }, [data?.nearest_area]);

  useEffect(() => {
    if (!data) return;
    fetchDate();
    const intervalId = setInterval(fetchDate, 60000);
    return () => clearInterval(intervalId);
  }, [fetchDate]);

  // 5️⃣ Fixed isDayTime Logic
  const isDayTime = (timeStr: string): boolean => {
    if (!timeStr) return true;
    const [h] = timeStr.split(':');
    const hour = parseInt(h, 10);
    return hour >= 6 && hour < 18; // 6 AM to 6 PM
  };

  useEffect(() => {
    setDay(isDayTime(dateTime?.time || ''));
  }, [dateTime?.time]);

  // 6️⃣ Icon & Image Update
  useEffect(() => {
    if (!code) return;
    setIcon(weatherCode[code]?.icon || 'SunIcon');
  }, [code, isDay]);

  const index = useMemo(() => {
    if (!code || !weatherCode[code]?.image?.url?.length) return 0;
    return Math.floor(Math.random() * weatherCode[code].image.url.length);
  }, [code]);

  useEffect(() => {
    if (!type || !code) return;
    try {
      setImg(weatherCode[code].image.url[index]);
      setSource(weatherCode[code].image.source[index]);
      setDesc(weatherCode[code].label);
    } catch (e) {
      console.warn('Image mapping error', e);
    }
  }, [type, code, index]);

  return (
    <WeatherContext.Provider
      value={{
        data,
        isLoading,
        error,
        refetch: fetchWeather,
        weatherImage: img,
        weatherImageSource: source,
        isDay,
        icon,
        location: city,
        dateTime,
        weatherDesc: desc,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

export const useWeather = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error('useWeather must be used inside WeatherProvider');
  return ctx;
};
