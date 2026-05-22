import { useState, Suspense, lazy, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ Add
import WeatherProvider from './components/FetchData';
import Navbar from './components/Navbar';
import NavbarProvider from './components/NavbarContext';
import SearchBar from './components/SearchBar.tsx';
import './App.css';
import { CloudSunIcon, HouseIcon, UserListIcon } from '@phosphor-icons/react';
import Loading from './pages/Loading.tsx';
import { DotsThreeCircle } from 'phosphor-react';

const Home = lazy(() => import('./pages/Home.tsx'));
const WeatherFirstPage = lazy(() => import('./pages/WeatherPart1.tsx'));
const WeatherSecondPage = lazy(() => import('./pages/WeatherPart2.tsx'));
const About = lazy(() => import('./pages/About.tsx'));

const tabs = [
  { icon: HouseIcon, label: 'Home' },
  { icon: CloudSunIcon, label: 'Weather' },
  { icon: UserListIcon, label: 'About Us' },
  { icon: DotsThreeCircle, label: 'Loading' },
];

// ✅ SEO Config per page
const seoConfig: Record<string, { title: string; description: string; keywords: string }> = {
  Home: {
    title: 'Weather Station | Real-Time Weather Forecast',
    description:
      'Get accurate weather updates, forecasts, and astronomy data for any city worldwide. Your personal weather companion.',
    keywords: 'weather, forecast, temperature, humidity, rain, sun, moon, astronomy',
  },
  Weather: {
    title: 'Live Weather | Temperature, Humidity & Forecast',
    description: `Check live weather conditions including temperature, humidity, UV index, wind speed, and 24-hour forecast for your city.`,
    keywords:
      'live weather, temperature, humidity, UV index, wind speed, weather forecast, hourly weather',
  },
  'About Us': {
    title: 'About Weather Station | Open Source Weather App',
    description:
      'Learn about Weather Station - a free, open-source weather tracking app built with React. Powered by wttr.in and TimeAPI.io.',
    keywords: 'about weather station, open source weather app, weather API, free weather data',
  },
  Loading: {
    title: 'Only Loading for 20s... | Weather Station',
    description: 'Only Loading Page Animation...',
    keywords: 'weather loading',
  },
};

const App = () => {
  const [city, setCity] = useState<string>('Kolkata');
  const [tab, setTab] = useState<string>('Home');
  const weatherPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tab === 'Weather') {
      weatherPageRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [tab]);

  const currentSeo = seoConfig[tab] || seoConfig.Home;
  return (
    <WeatherProvider city={city}>
      <NavbarProvider>
        {/* ✅ Dynamic SEO Tags */}
        <Helmet>
          <title>{currentSeo.title}</title>
          <meta name="description" content={currentSeo.description} />
          <meta name="keywords" content={currentSeo.keywords} />

          {/* Open Graph / Social Media */}
          <meta property="og:title" content={currentSeo.title} />
          <meta property="og:description" content={currentSeo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentSeo.title} />
          <meta name="twitter:description" content={currentSeo.description} />
          <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />

          {/* Mobile & Theme */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#14213d" />

          {/* Favicon */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Helmet>

        <Navbar tabs={tabs} setTab={setTab} tab={tab} />

        <Suspense fallback={<Loading />}>
          {tab === 'Home' && <Home setCity={setCity} setTab={setTab} />}
          {tab === 'Weather' && (
            <div id="WeatherPage" ref={weatherPageRef}>
              <SearchBar city={city} setCity={setCity} />
              <WeatherFirstPage />
              <WeatherSecondPage />
            </div>
          )}
          {tab === 'About Us' && <About setTab={setTab} />}
          {tab === 'Loading' && (
            <>
              <Loading />
              {setTimeout(() => {
                setTab('Weather');
              }, 20000)}
            </>
          )}
        </Suspense>
      </NavbarProvider>
    </WeatherProvider>
  );
};

export default App;
