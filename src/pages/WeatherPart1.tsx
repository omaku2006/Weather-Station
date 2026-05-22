import { useEffect, useRef, useState } from 'react';
import { useWeather } from '../components/FetchData';
import Icon from '../components/Icon';
import './WeatherPart1.css';
import { weatherCode } from '../scripts/Constants';
import ToggleButton from '../components/ui/ToggleButton';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Cloudy,
  Droplet,
  Eye,
  MapPinned,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  WindArrowDown,
} from 'lucide-react';
import { InfoPopover } from '../components/InfoPopover';
import CardContainerSummary from '../components/CardContainerSummary';
import AstronomySummary from '../components/AstronomySummary';
import AnimatedNumber from '../components/AnimatedNumber';
import TextTypeAnimation from '../components/TextTypeAnimation';
import Loading from './Loading';
import { Helmet } from 'react-helmet-async';

const WeatherFirstPage = () => {
  const { data, isLoading, icon, location, dateTime, weatherImage, weatherImageSource } =
    useWeather();
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [lengthUnit, setLengthUnit] = useState<'Km' | 'M'>('Km');
  const [index, setIndex] = useState<0 | 1 | 2 | number>(0);
  const rightPartScroll = useRef<HTMLDivElement>(null);
  const bottomCardScroll = useRef<HTMLDivElement>(null);

  const loc = `${location.charAt(0).toUpperCase() + location.slice(1)}, ${data?.nearest_area[0]?.country[0]?.value}`;

  const changeTempUnit = () => {
    setTempUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };
  const changeLenghtUnit = () => {
    setLengthUnit((prev) => (prev === 'Km' ? 'M' : 'Km'));
  };
  const uvindex = parseInt(data ? data?.current_condition[0]?.uvIndex : '0');
  const getUVIndexScale = (): string => {
    if (uvindex <= 2) return 'Low';
    else if (uvindex > 2 && uvindex <= 5) return 'Moderate';
    else if (uvindex > 5 && uvindex <= 7) return 'High';
    else if (uvindex > 7 && uvindex <= 10) return 'Very High';
    else return 'Extreme';
  };

  const scroll = (delta: number) => {
    rightPartScroll.current?.scrollBy({ top: delta * 98, behavior: 'smooth' });
  };

  const scrollLeft = (delta: number) => {
    bottomCardScroll.current?.scrollBy({ left: delta * 270, behavior: 'smooth' });
  };

  useEffect(() => {
    console.log('🌩️ Weather Data Debug:', {
      isLoading,
      hasData: !!data,
      dataKeys: data ? Object.keys(data) : [],
      weatherArray: data?.weather,
      currentCondition: data?.current_condition,
      fullData: data, // Check full structure in console
    });
  }, [data, isLoading]);

  if (!data?.weather?.[0] || !data?.current_condition?.[0]) {
    return <Loading />; // or <div>Invalid data structure</div>
  }

  const cityName = data?.nearest_area?.[0]?.areaName?.[0]?.value || location;
  const country = data?.nearest_area?.[0]?.country?.[0]?.value || '';

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <title>{`Weather in ${cityName}${country ? ', ' + country : ''} | Live Conditions & Forecast`}</title>
        <meta
          name="description"
          content={`Live weather in ${cityName}: temperature, humidity, UV index, wind speed, and 24-hour forecast. Updated in real-time.`}
        />
      </Helmet>
      <div className="justcontainer">
        <div
          className="weatherImage"
          style={{
            background: `url(${weatherImage}) no-repeat center / cover`,
          }}
        ></div>
        <div className="mainContainer">
          <div className="weatherContainer">
            <div className="btnContainer">
              <ToggleButton mark={tempUnit} func={changeTempUnit} />
              <ToggleButton mark={lengthUnit} func={changeLenghtUnit} />
            </div>
            <div className="abovePart">
              <div className="topLeft quick">
                <h1 className="temp">
                  <AnimatedNumber
                    value={parseInt(
                      data
                        ? tempUnit === 'C'
                          ? data?.current_condition[0]?.temp_C
                          : data?.current_condition[0]?.temp_F
                        : '0'
                    )}
                  />
                  &deg;{tempUnit === 'C' ? 'C' : 'F'}
                </h1>
                <div className="condition">
                  <Icon size={44} icon={icon} />
                  <h2>
                    <TextTypeAnimation
                      text={data ? weatherCode[data?.current_condition[0]?.weatherCode]?.label : ''}
                      duration={250}
                    />
                  </h2>
                </div>
                <h3 className="feelsliketemp">
                  Feels Like &nbsp;
                  <AnimatedNumber
                    value={
                      data
                        ? tempUnit === 'C'
                          ? parseInt(data?.current_condition[0]?.FeelsLikeC)
                          : parseInt(data?.current_condition[0]?.FeelsLikeF)
                        : 0
                    }
                    duration={2}
                  />
                  &deg;{tempUnit === 'C' ? 'C' : 'F'}
                </h3>
                <div className="location">
                  <p>
                    <MapPinned size={20} /> &nbsp; &nbsp;Location : &nbsp;
                    <TextTypeAnimation text={loc} duration={150} />
                  </p>
                  <InfoPopover
                    displayCity={location}
                    nearestCity={data?.nearest_area?.[0]?.areaName?.[0]?.value ?? ''}
                    region={data?.nearest_area?.[0]?.region?.[0]?.value ?? ''}
                    country={data?.nearest_area?.[0]?.country?.[0]?.value ?? ''}
                    lat={data?.nearest_area?.[0]?.latitude ?? ''}
                    lon={data?.nearest_area?.[0]?.longitude ?? ''}
                    msg={
                      'Data comes from the closest available weather station. Your exact coordinates are mapped automatically.'
                    }
                  />
                </div>
              </div>
              <div className="rightPartContainer">
                <button className="scrollbtn btnup" onClick={() => scroll(-1)}>
                  <ChevronUp size={24} />
                </button>
                <div className="rightPart" ref={rightPartScroll}>
                  <div className="section">
                    <div className="iconContainer">
                      <Droplet size={44} />
                    </div>
                    <div className="info">
                      <h5>Humidity</h5>
                      <p>
                        <AnimatedNumber
                          value={parseInt(data ? data?.current_condition[0]?.humidity : '0')}
                        />
                        %
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <div className="iconContainer">
                      <Cloudy size={44} />
                    </div>
                    <div className="info">
                      <h5>Cloud Cover</h5>
                      <p>
                        <AnimatedNumber
                          value={parseInt(data ? data?.current_condition[0]?.cloudcover : '0')}
                          duration={2}
                        />
                        &nbsp;%
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <div className="iconContainer">
                      <span>UV</span>
                    </div>
                    <div className="info">
                      <h5>UV Index</h5>
                      <p>
                        <AnimatedNumber
                          value={parseInt(data ? data?.current_condition[0]?.uvIndex : '0')}
                          duration={2}
                        />{' '}
                      </p>
                      <p> - {getUVIndexScale()}</p>
                    </div>
                  </div>
                  <div className="section">
                    <div className="iconContainer">
                      <Eye size={44} />
                    </div>
                    <div className="info">
                      <h5>Visibility</h5>
                      <p>
                        <AnimatedNumber
                          value={
                            lengthUnit === 'Km'
                              ? parseInt(data ? data?.current_condition[0]?.visibility : '0')
                              : parseInt(data ? data?.current_condition[0]?.visibilityMiles : '0')
                          }
                          duration={2}
                        />
                        &nbsp;{lengthUnit}
                      </p>
                    </div>
                  </div>

                  <div className="section">
                    <div className="iconContainer">
                      <WindArrowDown size={44} />
                    </div>
                    <div className="info">
                      <h5>Air Pressure</h5>
                      <p>
                        <AnimatedNumber
                          value={parseInt(data ? data?.current_condition[0]?.pressure : '0')}
                          duration={2}
                        />{' '}
                        &nbsp;hPa
                      </p>
                    </div>
                  </div>

                  <div className="section">
                    <div className="iconContainer">
                      <ThermometerSun size={44} />
                    </div>
                    <div className="info">
                      <h5>Max Temperature</h5>
                      <p>
                        <AnimatedNumber
                          value={
                            tempUnit === 'C'
                              ? parseInt(data ? data?.weather[0]?.maxtempC : '0')
                              : parseInt(data ? data?.weather[0]?.maxtempF : '0')
                          }
                          duration={2}
                        />
                        &deg;{tempUnit}
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <div className="iconContainer">
                      <ThermometerSnowflake size={44} />
                    </div>
                    <div className="info">
                      <h5>Min Temperature</h5>
                      <p>
                        <AnimatedNumber
                          value={
                            data
                              ? tempUnit === 'C'
                                ? parseInt(data?.weather[0]?.mintempC)
                                : parseInt(data?.weather[0]?.mintempF)
                              : 0
                          }
                          duration={2}
                        />
                        &deg;{tempUnit}
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <div className="iconContainer">
                      <Thermometer size={44} />
                    </div>
                    <div className="info">
                      <h5>Avg. Temperature</h5>
                      <p>
                        <AnimatedNumber
                          value={
                            data
                              ? tempUnit === 'C'
                                ? parseInt(data?.weather[0]?.avgtempC)
                                : parseInt(data?.weather[0]?.avgtempF)
                              : 0
                          }
                          duration={2}
                        />
                        &deg;{tempUnit}
                      </p>
                    </div>
                  </div>
                  <div className="date">
                    <h5>
                      {dateTime?.date}&nbsp;{dateTime?.dayOfWeek}
                    </h5>
                    <h5>
                      Time in {data?.nearest_area[0]?.areaName[0]?.value}&nbsp;{dateTime?.time}
                    </h5>
                  </div>
                </div>
                <button className="scrollbtn btndown" onClick={() => scroll(1)}>
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>

            <div className="bottom">
              <div className="cardContainerWrap">
                <ChevronLeft
                  className="scrollbtn leftScroll"
                  onClick={() => {
                    scrollLeft(-1);
                  }}
                />
                <div className="dateContainer">
                  <div className="date">
                    <ChevronLeft
                      className="decrementBtn btn"
                      onClick={() => {
                        setIndex((prev) => ((prev - 1 + 3) % 3) as 0 | 1 | 2);
                      }}
                    />
                    <p>{data?.weather[index]?.date}</p>
                    <ChevronRight
                      className="incrementBtn btn"
                      onClick={() => {
                        setIndex((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
                      }}
                    />
                  </div>
                </div>
                <div className="cardContainer" ref={bottomCardScroll}>
                  {data?.weather[index]?.hourly?.map((item) => {
                    return (
                      <CardContainerSummary
                        key={item?.time}
                        tempC={item?.tempC}
                        tempF={item?.tempF}
                        code={item?.weatherCode}
                        FeelsLikeC={item?.FeelsLikeC}
                        FeelsLikeF={item?.FeelsLikeF}
                        time={item?.time}
                        tempUnit={tempUnit}
                      />
                    );
                  })}
                </div>
                <ChevronRight
                  className="scrollbtn rightScroll"
                  onClick={() => {
                    scrollLeft(1);
                  }}
                />
              </div>
              <div className="hr"></div>
              <div className="astronomySummaryWrap">
                <AstronomySummary
                  sunRise={data?.weather[0]?.astronomy[0]?.sunrise}
                  sunSet={data?.weather[0]?.astronomy[0]?.sunset}
                  moonRise={data?.weather[0]?.astronomy[0]?.moonrise}
                  moonSet={data?.weather[0]?.astronomy[0]?.moonset}
                  currentTime={dateTime?.time}
                />
              </div>
            </div>
          </div>
          <span style={{ position: 'fixed', bottom: '0', right: '0', zIndex: '99999' }}>
            Image Source : {weatherImageSource}
          </span>
        </div>
      </div>
    </>
  );
};

export default WeatherFirstPage;
