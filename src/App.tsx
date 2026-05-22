import { useState, Suspense, lazy, useEffect, useRef } from 'react';
import WeatherProvider from './components/FetchData';
import Navbar from './components/Navbar';
import NavbarProvider from './components/NavbarContext';
import SearchBar from './components/SearchBar.tsx';
import './App.css';
import { CloudSunIcon, HouseIcon, UserListIcon } from '@phosphor-icons/react';
import Loading from './pages/Loading.tsx';
import { DotsThreeCircle } from 'phosphor-react';

// ✅ Lazy load pages (load only when needed)
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

const App = () => {
  const [city, setCity] = useState<string>('Kolkata');
  const [tab, setTab] = useState<string>('Home');
  const weatherPageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (tab === 'Weather') {
      weatherPageRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [tab]);

  return (
    <WeatherProvider city={city}>
      <NavbarProvider>
        <Navbar tabs={tabs} setTab={setTab} />

        {/* ✅ Wrap lazy components in Suspense */}
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
              <Loading />;
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
