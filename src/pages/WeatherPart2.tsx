import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Eclipse,
  Moon,
  MoonStar,
  Sunrise,
  Sunset,
} from 'lucide-react';
import AstronomySummary from '../components/AstronomySummary';
import { useWeather } from '../components/FetchData';
import './WeatherPart2.css';
import { useRef, useState } from 'react';
import CardContainer from '../components/CardContainer';
import ToggleButton from '../components/ui/ToggleButton';
import { InfoPopover } from '../components/InfoPopover';
import Loading from './Loading';

const WeatherSecondPage = () => {
  const { data, icon, location, dateTime, weatherImage, weatherImageSource } = useWeather();
  const [index, setIndex] = useState<0 | 1 | 2>(0);
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [lengthUnit, setLengthUnit] = useState<'Km' | 'M'>('Km');
  const divScroll = useRef<HTMLDivElement>(null);

  const changeTempUnit = () => {
    setTempUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };
  const changeLenghtUnit = () => {
    setLengthUnit((prev) => (prev === 'Km' ? 'M' : 'Km'));
  };
  const currentScroll = useRef<number>(0); // current position track karo

  const handleScroll = (delta: number) => {
    if (!divScroll.current) return;

    currentScroll.current += 540 * delta;

    // Bounds check — negative nai jaay!
    currentScroll.current = Math.max(0, currentScroll.current);

    // Max scroll check
    const maxScroll = divScroll.current.scrollWidth - divScroll.current.clientWidth;
    currentScroll.current = Math.min(currentScroll.current, maxScroll);

    divScroll.current.scrollTo({
      left: currentScroll.current,
      behavior: 'smooth',
    });
  };
  if (!data?.weather?.[0] || !data?.current_condition?.[0]) {
    return <Loading />; // or <div>Invalid data structure</div>
  }

  return (
    <div className="page2 mainContainer">
      <div className="btnContainer">
        <ToggleButton mark={tempUnit} func={changeTempUnit} />
        <ToggleButton mark={lengthUnit} func={changeLenghtUnit} />
      </div>

      <div className="page2top">
        <div className="page2topLeft">
          <AstronomySummary
            sunRise={data?.weather[index]?.astronomy[0]?.sunrise}
            sunSet={data?.weather[index]?.astronomy[0]?.sunset}
            moonRise={data?.weather[index]?.astronomy[0]?.moonrise}
            moonSet={data?.weather[index]?.astronomy[0]?.moonset}
            currentTime={dateTime?.time}
          />
          <p style={{ textAlign: 'center' }}>
            At&nbsp;{dateTime?.time}&nbsp;Time, Position of Sun & Moon in{' '}
            {data?.nearest_area[0]?.areaName[0].value}
          </p>
        </div>
        <div className="hr"></div>
        <div className="page2topRight">
          <section>
            <div className="icon">
              <Sunrise size={55} />
            </div>
            <div className="info">
              <h3>Sun Rise</h3>
              <p>{data?.weather[index]?.astronomy[0]?.sunrise}</p>
            </div>
          </section>
          <section>
            <div className="icon">
              <Sunset size={55} />
            </div>
            <div className="info">
              <h3>Sun Set</h3>
              <p>{data?.weather[index]?.astronomy[0]?.sunset}</p>
            </div>
          </section>
          <section>
            <div className="icon">
              <Eclipse size={55} />
            </div>
            <div className="info">
              <h5>Moon Illumination</h5>
              <p>{data?.weather[index]?.astronomy[0]?.moon_illumination}</p>
            </div>
          </section>

          <section>
            <div className="icon">
              <ArrowUp size={20} className="mix" />
              <Moon size={35} className="mix" />
            </div>
            <div className="info">
              <h3>Moon Rise</h3>
              <p>{data?.weather[index]?.astronomy[0]?.moonrise}</p>
            </div>
          </section>
          <section>
            <div className="icon">
              <ArrowDown size={20} className="mix" />
              <Moon size={35} className="mix" />
            </div>
            <div className="info">
              <h3>Moon Set</h3>
              <p>{data?.weather[index]?.astronomy[0]?.moonset}</p>
            </div>
          </section>
          <section>
            <div className="icon">
              <MoonStar size={55} />
            </div>
            <div className="info">
              <h3>Moon Phase</h3>
              <p>{data?.weather[index]?.astronomy[0]?.moon_phase}</p>
            </div>
          </section>
        </div>
      </div>
      <div className="page2middle">
        <div className="dateContainer">
          <div className="date">
            <ChevronLeft
              className="decrementBtn btn"
              onClick={() => {
                setIndex((prev) => (prev + 1) % 3);
              }}
            />
            <p>
              {data?.weather[index]?.date}
              <InfoPopover
                displayCity={location}
                nearestCity={data?.nearest_area?.[0]?.areaName?.[0]?.value ?? ''}
                region={data?.nearest_area?.[0]?.region?.[0]?.value ?? ''}
                country={data?.nearest_area?.[0]?.country?.[0]?.value ?? ''}
                lat={data?.nearest_area?.[0]?.latitude ?? ''}
                lon={data?.nearest_area?.[0]?.longitude ?? ''}
                msg={`Data comes from the closest available weather station. Your exact coordinates are mapped automatically.

  🌙 The astronomy and weather data shown above is based on the selected date. 
  Use the arrow buttons (← →)to switch between today, tomorrow, and the day after tomorrow. 
  All information including sunrise, sunset, moonrise, moonset, moon phase, and hourly weather updates automatically when you change the date.
`}
              />
            </p>
            <ChevronRight
              className="incrementBtn btn"
              onClick={() => {
                setIndex((prev) => (prev - 1 + 3) % 3);
              }}
            />
          </div>
        </div>
      </div>
      <div className="page2bottom">
        <ChevronLeft
          size={18}
          className="leftScrollbtn page2btn"
          onClick={() => handleScroll(-1)}
        />
        <div className="page2cardContainer" ref={divScroll}>
          {data?.weather[index]?.hourly.map((data) => {
            return (
              <CardContainer
                dewPointC={data?.DewPointC}
                dewPointF={data?.DewPointF}
                feelsLikeC={data?.FeelsLikeC}
                feelsLikeF={data?.FeelsLikeF}
                heatIndexC={data?.HeatIndexC}
                heatIndexF={data?.HeatIndexF}
                windChillC={data?.WindChillC}
                windChillF={data?.WindChillF}
                windGustkmph={data?.WindGustKmph}
                windGustmph={data?.WindGustMiles}
                chanceOfFog={data?.chanceoffog}
                chanceOfFrost={data?.chanceoffrost}
                chanceOfHighTemp={data?.chanceofhightemp}
                chanceOfOvercast={data?.chanceofovercast}
                chanceOfRain={data?.chanceofrain}
                chanceOfRemdry={data?.chanceofremdry}
                chanceOfSnow={data?.chanceofsnow}
                chanceOfSunshine={data?.chanceofsunshine}
                chanceOfThunder={data?.chanceofthunder}
                chanceOfWindy={data?.chanceofwindy}
                cloudcover={data?.cloudcover}
                humidity={data?.humidity}
                pressure={data?.pressure}
                tempC={data?.tempC}
                tempF={data?.tempF}
                windDir16Point={data?.winddir16Point}
                windDirDegree={data?.winddirDegree}
                windSpeedkmph={data?.windspeedKmph}
                windSpeedmph={data?.windspeedMiles}
                time={data?.time}
                visibility={data?.visibility}
                visibilitymph={data?.visibilityMiles}
                weatherCode={data?.weatherCode}
                tempUnit={tempUnit}
                lengthUnit={lengthUnit}
              />
            );
          })}
        </div>
        <ChevronRight
          size={18}
          className="rightScrollbtn page2btn"
          onClick={() => handleScroll(1)}
        />
      </div>
    </div>
  );
};

export default WeatherSecondPage;
