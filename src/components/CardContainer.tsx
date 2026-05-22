import './CardContainer.css';
import Icon from './Icon';
import { weatherCode } from '../scripts/Constants';
import {
  Bubbles,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloudy,
  Eye,
  MousePointer2,
  Snowflake,
  Sun,
  Tornado,
  WavesVertical,
  Wind,
  WindArrowDown,
} from 'lucide-react';
import { Drop, ThermometerHot } from 'phosphor-react';
import { WindmillIcon } from '@phosphor-icons/react';
import AnimatedNumber from './AnimatedNumber';

type Props = {
  dewPointC: string;
  dewPointF: string;
  feelsLikeC: string;
  feelsLikeF: string;
  heatIndexC: string;

  heatIndexF: string;
  windChillC: string;
  windChillF: string;
  windGustkmph: string;
  windGustmph: string;
  chanceOfFog: string;
  chanceOfFrost: string;
  chanceOfHighTemp: string;
  chanceOfOvercast: string;
  chanceOfRain: string;
  chanceOfRemdry: string;
  chanceOfSnow: string;
  chanceOfSunshine: string;
  chanceOfThunder: string;
  chanceOfWindy: string;
  cloudcover: string;
  humidity: string;
  pressure: string;
  tempC: string;
  tempF: string;
  windDir16Point: string;
  windDirDegree: string;
  windSpeedkmph: string;
  windSpeedmph: string;
  time: string;
  visibility: string;
  visibilitymph: string;
  weatherCode: string;
  tempUnit: 'C' | 'F';
  lengthUnit: 'Km' | 'M';
};

const CardContainer: FC<Props> = (data) => {
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
    <article className="page2card">
      <div className="cardTop">
        <p>{formatHourlyTime(data.time)}</p>
        <Icon size={30} icon={weatherCode[data.weatherCode].icon} time={data.time} />
      </div>
      <div className="cardTopMiddle">
        <h1>
          <AnimatedNumber
            value={data.tempUnit === 'C' ? parseInt(data.tempC) : parseInt(data.tempF)}
          />
          &deg;{data.tempUnit}
        </h1>
        <p className="badge">
          Feels Like &nbsp;
          <AnimatedNumber
            value={data.tempUnit === 'C' ? parseInt(data.tempC) : parseInt(data.tempF)}
          />
          &deg;{data.tempUnit}
        </p>
      </div>
      <div className="cardMiddle">
        <section>
          <p>Dew Point</p>
          <Bubbles size={30} />
          <p>
            <AnimatedNumber
              value={data.tempUnit === 'C' ? parseInt(data.dewPointC) : parseInt(data.dewPointF)}
            />
            &deg;{data.tempUnit}
          </p>
        </section>
        <section>
          <p>Heat Index</p>
          <WavesVertical size={30} />
          <p>
            <AnimatedNumber
              value={data.tempUnit === 'C' ? parseInt(data.heatIndexC) : parseInt(data.heatIndexF)}
            />
            &deg;{data.tempUnit}
          </p>
        </section>
        <section>
          <p>Wind Chill</p>
          <Wind size={30} />
          <p>
            <AnimatedNumber
              value={data.tempUnit === 'C' ? parseInt(data.windChillC) : parseInt(data.windChillF)}
            />
            &deg;{data.tempUnit}
          </p>
        </section>
        <section>
          <p>Wind Gust</p>
          <Tornado size={30} />
          <p>
            <AnimatedNumber
              value={parseInt(data.lengthUnit === 'Km' ? data.windGustkmph : data.windGustmph)}
            />
            &nbsp;{data.lengthUnit}
            ph
          </p>
        </section>
        <section>
          <p>Chance of Fog</p>
          <CloudFog size={30} />
          <p>
            {data.chanceOfFog != '0' ? <AnimatedNumber value={parseInt(data.chanceOfFog)} /> : '--'}
            %
          </p>
        </section>
        <section>
          <p>Chance of Frost</p>
          <Snowflake size={30} />
          <p>
            {data.chanceOfFrost != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfFrost)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of High Temp</p>
          <ThermometerHot size={30} />
          <p>
            {data.chanceOfHighTemp != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfHighTemp)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Overcast</p>
          <Cloudy size={30} />
          <p>
            {data.chanceOfOvercast != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfOvercast)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Rain</p>
          <CloudRain size={30} />
          <p>
            {data.chanceOfRain != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfRain)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Snow</p>
          <CloudSnow size={30} />
          <p>
            {data.chanceOfSnow != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfSnow)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Sunshine</p>
          <Sun size={30} />
          <p>
            {data.chanceOfSunshine != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfSunshine)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Thunder</p>
          <CloudLightning size={30} />
          <p>
            {data.chanceOfThunder != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfThunder)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>Chance of Windy</p>
          <WindmillIcon size={30} />
          <p>
            {data.chanceOfWindy != '0' ? (
              <AnimatedNumber value={parseInt(data.chanceOfWindy)} />
            ) : (
              '--'
            )}
            %
          </p>
        </section>
        <section>
          <p>CloudCover</p>
          <Cloud size={30} />
          <p>
            {data.cloudcover != '0' ? <AnimatedNumber value={parseInt(data.cloudcover)} /> : '--'}%
          </p>
        </section>
        <section>
          <p>Humidity</p>
          <Drop size={30} />
          <p>{data.humidity != '0' ? <AnimatedNumber value={parseInt(data.humidity)} /> : '--'}%</p>
        </section>
        <section>
          <p>Air Pressure</p>
          <WindArrowDown size={30} />
          <p>{<AnimatedNumber value={parseInt(data.pressure)} />}&nbsp;hPa</p>
        </section>
        <section>
          <p>Visibility</p>
          <Eye size={30} />
          <p>
            {
              <AnimatedNumber
                value={parseInt(data.lengthUnit === 'Km' ? data.visibility : data.visibilitymph)}
              />
            }
            &nbsp;{data.lengthUnit}
          </p>
        </section>
      </div>
      <hr className="cardHr" />
      <div className="page2bottom">
        <h5>Wind</h5>
        <div className="windDirIcon">
          <MousePointer2
            size={50}
            style={{ transform: `rotate(${45 + Number(data.windDirDegree)}deg)` }}
          />
        </div>
        <p>Wind Direction : {data.windDir16Point}</p>
        <p>
          Wind Direction in Degree : {<AnimatedNumber value={parseInt(data.windDirDegree)} />}&deg;
        </p>
      </div>
    </article>
  );
};

export default CardContainer;
