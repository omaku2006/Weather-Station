import { useState, Suspense, lazy, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // ← ADD
import WeatherProvider from './components/FetchData';
import Navbar from './components/Navbar';
import NavbarProvider from './components/NavbarContext';
import SearchBar from './components/SearchBar.tsx';
import './App.css';
import { CloudSunIcon, HouseIcon, UserListIcon } from '@phosphor-icons/react';
import Loading from './pages/Loading.tsx';
import { DotsThreeCircle } from 'phosphor-react';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';

ReactGA.initialize('G-J39QTB3X3B');

const Home = lazy(() => import('./pages/Home.tsx'));
const WeatherFirstPage = lazy(() => import('./pages/WeatherPart1.tsx'));
const WeatherSecondPage = lazy(() => import('./pages/WeatherPart2.tsx'));
const About = lazy(() => import('./pages/About.tsx'));

const tabs = [
  { icon: HouseIcon, label: 'Home', path: '/' },
  { icon: CloudSunIcon, label: 'Weather', path: '/weather' },
  { icon: UserListIcon, label: 'About Us', path: '/about' },
  { icon: DotsThreeCircle, label: 'Loading', path: '/loading' },
];

const seoConfig = {
  Home: {
    title: 'Weather Station | Real-Time Weather Forecast',
    description:
      'Get accurate weather updates, forecasts, and astronomy data for any city worldwide.',
    keywords: 'weather, forecast, temperature, humidity, rain, sun, moon, astronomy',
  },
  Weather: {
    title: 'Live Weather | Temperature, Humidity & Forecast',
    description:
      'Check live weather conditions including temperature, humidity, UV index, wind speed, and 24-hour forecast.',
    keywords: 'live weather, temperature, humidity, UV index, wind speed, weather forecast',
  },
  'About Us': {
    title: 'About Weather Station | Open Source Weather App',
    description:
      'Learn about Weather Station - a free, open-source weather tracking app built with React.',
    keywords: 'about weather station, open source weather app, weather API, free weather data',
  },
  Loading: {
    title: 'Loading... | Weather Station',
    description: 'Loading weather data...',
    keywords: 'weather loading',
  },
};

const App = () => {
  const [city, setCity] = useState<string>('Kolkata');
  const [tab, setTab] = useState<string>('Home');
  const weatherPageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // ← ADD
  const location = useLocation(); // ← ADD

  // Sync tab with URL on page load
  useEffect(() => {
    const path = location.pathname;
    const tabMap: Record<string, string> = {
      '/': 'Home',
      '/weather': 'Weather',
      '/about': 'About Us',
      '/loading': 'Loading',
    };
    const newTab = tabMap[path] || 'Home';
    if (newTab !== tab) {
      setTab(newTab);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
  }, [location.pathname]);

  // Handle tab click - update URL
  const handleTabChange = (tabName: string) => {
    setTab(tabName);
    if (tabName === 'Home') navigate('/');
    else if (tabName === 'Weather') navigate('/weather');
    else if (tabName === 'About Us') navigate('/about');
    else if (tabName === 'Loading') navigate('/loading');

    // Track page view
    ReactGA.send({ hitType: 'pageview', page: `/${tabName.toLowerCase().replace(/\s+/g, '-')}` });
  };

  useEffect(() => {
    if (tab === 'Weather') {
      weatherPageRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [tab]);

  const currentSeo = seoConfig[tab as keyof typeof seoConfig] || seoConfig.Home;

  return (
    <WeatherProvider city={city}>
      <Analytics />
      <NavbarProvider>
        <Helmet>
          <title>{currentSeo.title}</title>
          <meta name="description" content={currentSeo.description} />
          <meta name="keywords" content={currentSeo.keywords} />
          <meta property="og:title" content={currentSeo.title} />
          <meta property="og:description" content={currentSeo.description} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://weather-station-iota.vercel.app${location.pathname}`}
          />
          <meta
            property="og:image"
            content="https://weather-station-iota.vercel.app/og-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentSeo.title} />
          <meta name="twitter:description" content={currentSeo.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#14213d" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            rel="canonical"
            href={`https://weather-station-iota.vercel.app${location.pathname}`}
          />
        </Helmet>

        <Navbar tabs={tabs} setTab={handleTabChange} tab={tab} />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home setCity={setCity} setTab={setTab} />} />
            <Route
              path="/weather"
              element={
                <div id="WeatherPage" ref={weatherPageRef}>
                  <SearchBar city={city} setCity={setCity} />
                  <WeatherFirstPage />
                  <WeatherSecondPage />
                </div>
              }
            />
            <Route path="/about" element={<About setTab={setTab} />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </Suspense>
      </NavbarProvider>
    </WeatherProvider>
  );
};

export default App;
