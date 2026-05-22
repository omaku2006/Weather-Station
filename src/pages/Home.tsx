import { useEffect, useState, type FC } from 'react';
import './Home.css';
import { imageUrls } from './Loading';
import {
  ChartNoAxesGantt,
  ClockCheck,
  HeartHandshake,
  Image,
  MapPlus,
  MirrorRectangular,
  RefreshCcw,
  SunMoon,
  Thermometer,
  Wind,
} from 'lucide-react';
import { Drop } from 'phosphor-react';
import { AirTrafficControlIcon, PersonSimpleCircleIcon } from '@phosphor-icons/react';
import TextTypeAnimation from '../components/TextTypeAnimation';
import Footer from '../components/Footer';

const getRandomImage = (): string => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

const randomImage = getRandomImage();

type Props = {
  setTab: (tab: string) => void;
  setCity: (city: string) => void;
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Weather Station',
  description: 'Free real-time weather forecast application with glassmorphism UI',
  url: 'https://yourdomain.com',
  applicationCategory: 'WeatherApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Real-time temperature',
    'Humidity tracking',
    'UV Index monitoring',
    '24-hour forecast',
    'Sun & Moon position tracker',
    'Glassmorphism UI',
  ],
};

const Home: FC<Props> = ({ setCity, setTab }) => {
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.scrollElement').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('.scrollElement').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleSubmit = () => {
    if (input === '') return;
    setCity(input);
    setTab('Weather');
  };

  return (
    <>
      <Helmet>
        <title>Weather Station | Free Real-Time Weather Forecast</title>
        <meta
          name="description"
          content="Get accurate weather updates, forecasts, and astronomy data for any city worldwide. Your personal weather companion."
        />
        <meta
          name="keywords"
          content="weather, forecast, temperature, humidity, rain, sun, moon, astronomy, real-time weather"
        />
        <link rel="canonical" href="https://yourdomain.com" />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>
      <div className="homeContainer">
        <div className="heroSection">
          <div
            className="heroSectionImage"
            style={{ background: `url(${randomImage}) no-repeat center / cover` }}
          ></div>
          <section className="topPart">
            <h1 className="brandName">
              <AirTrafficControlIcon size={65} />
              &nbsp;&nbsp;
              <TextTypeAnimation text="Weather Station" duration={200} threshold={0.3} />
            </h1>
            <h2>
              <TextTypeAnimation
                text="Your Personal Weather Companion!"
                duration={100}
                showCursor={true}
                infinite={true}
              />
            </h2>
            <p>
              Get precise weather updates for any location worldwide. Plan your day with confidence
              using our advanced weather tracking system.
            </p>
          </section>
          <section className="searchContainer">
            <input
              type="search"
              aria-label="Enter your city name"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Get Started, Enter your city and search..."
            />
            <button onClick={handleSubmit}>Search</button>
          </section>
        </div>
        <div className="middlePage">
          <div className="features">
            <div className="title">
              <h1>
                <TextTypeAnimation text="Features" duration={200} />
              </h1>
            </div>
            <div className="content">
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <Thermometer className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Temperature Monitoring</h6>
                  <p>
                    Get accurate current temperature readings with 'feels like' index. Track minimum
                    and maximum temperatures throughout the day to plan your activities accordingly.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <Drop className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Humidity & Atmospheric Pressure</h6>
                  <p>
                    Monitor humidity levels to stay comfortable and predict precipitation. Keep
                    track of atmospheric pressure changes – a key indicator of upcoming weather
                    shifts.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <Wind className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Wind Speed & Direction Analysis</h6>
                  <p>
                    Comprehensive wind data including speed, gusts, and direction. Essential for
                    outdoor sports, sailing, aviation, and general weather awareness.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <SunMoon className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Dynamic Sun & Moon Tracker</h6>
                  <p>
                    Watch the sun and moon move across an interactive celestial display. Sunrise,
                    sunset, moonrise, and moonset times update in real-time with smooth animations.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <PersonSimpleCircleIcon className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Visibility & UV Index</h6>
                  <p>
                    Know how far you can see with visibility distance data. Stay protected with UV
                    index readings – perfect for planning outdoor activities and sun protection.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <ClockCheck className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>24-Hour Weather Forecast</h6>
                  <p>
                    Plan your day hour by hour with detailed breakdowns of temperature changes,
                    precipitation chances, and wind conditions for the next full day.
                  </p>
                </div>
              </div>
            </div>
            <div className="hrContainer">
              <hr className="homeHr" />
              <p>
                <AirTrafficControlIcon size={40} />
              </p>
              <hr className="homeHr" />
            </div>
            <div className="title">
              <h1>
                <TextTypeAnimation text="Live & Interactive Elements" duration={150} />
              </h1>
              <p>Experience weather like never before with our dynamic real-time components</p>
            </div>
            <div className="content">
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <SunMoon className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Animated Sun & Moon Movement</h6>
                  <p>
                    Our celestial tracker uses smooth, continuous animations to show the sun and
                    moon's actual positions throughout the day. Watch as they gracefully move across
                    your screen based on your location's real astronomical data.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <MapPlus className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Live Location Time</h6>
                  <p>
                    Each city you search displays its precise local time. The clock updates
                    automatically every minute through our intelligent interval system – no page
                    refresh needed.
                  </p>
                </div>
              </div>
              <div className="info scrollElement">
                <div className="featureIconContainer">
                  <div className="paddingIcon">
                    <RefreshCcw className="featureIcon" size={50} />
                  </div>
                </div>
                <div className="infoContent">
                  <h6>Smart Data Refresh</h6>
                  <p>
                    While our core weather data fetches once per search, the astronomy and time
                    features keep ticking in real-time. This clever balance gives you the best of
                    both worlds: accurate current conditions with lively, moving elements.
                  </p>
                </div>
              </div>
            </div>
            <div className="hrContainer">
              <hr className="homeHr" />
              <p>
                <AirTrafficControlIcon size={40} />
              </p>
              <hr className="homeHr" />
            </div>
            <div className="contentCardFormate">
              <div className="title">
                <h1>
                  <TextTypeAnimation text="Modern Glassmorphic Design" duration={150} />
                </h1>
                <p>Beautiful, frosted-glass interface with smooth micro-interactions</p>
              </div>
              <div className="homeCardContainer">
                <div className="content cardContent">
                  <div
                    className="homeCardImage"
                    style={{ background: `url(${getRandomImage()}) no-repeat center / cover` }}
                  ></div>
                  <article className="homeCard scrollElement">
                    <div className="featureIconContainer">
                      <div className="paddingIcon">
                        <MirrorRectangular className="featureIcon" size={50} />
                      </div>
                    </div>

                    <h4>Frosted Glass Aesthetic</h4>
                    <p>
                      Each card features a premium glass-morphism effect with soft blur backgrounds,
                      subtle borders, and transparency that creates depth without compromising
                      readability.
                    </p>
                  </article>
                  <article className="homeCard scrollElement">
                    <div className="featureIconContainer">
                      <div className="paddingIcon">
                        <ChartNoAxesGantt className="featureIcon" size={50} />
                      </div>
                    </div>

                    <h4>Smooth Hover Animations</h4>
                    <p>
                      Cards elevate gracefully on hover with scale transforms, shadow intensity
                      changes, and coloured border accents that provide immediate visual feedback.
                    </p>
                  </article>
                  <article className="homeCard scrollElement">
                    <div className="featureIconContainer">
                      <div className="paddingIcon">
                        <Image className="featureIcon" size={50} />
                      </div>
                    </div>

                    <h5>Dynamic Weather Images</h5>
                    <p>
                      Enter any city name and see weather-appropriate images as your background.
                      Every refresh brings a new image—sourced from Unsplash and Pexels. Fresh,
                      immersive, every time.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="hrContainer">
              <hr className="homeHr" />
              <p>
                <AirTrafficControlIcon size={40} />
              </p>
              <hr className="homeHr" />
            </div>

            <div id="specialThanks" className="scrollElement">
              <div className="title">
                <h1>
                  <HeartHandshake size={50} color="#f66151" />
                  &nbsp;&nbsp;
                  <TextTypeAnimation text="Special Thanks!" duration={150} />
                  &nbsp;&nbsp;
                  <HeartHandshake size={50} color="#f66151" />
                </h1>
                <p>
                  This weather station wouldn't be possible without the generous contributions of
                  the open-source community and these incredible free resources:
                </p>
              </div>
              <ul>
                <li>
                  <b>wttr.in</b> – For providing accurate, real-time weather data
                </li>{' '}
                <li>
                  <b>TimeAPI.io</b> – For reliable timezone and time information
                </li>
                <li>
                  <b>Unsplash</b> – For their stunning, freely usable photograph library
                </li>
                <li>
                  <b>Pexels</b> – For their extensive collection of high-quality, royalty-free
                  images
                </li>
                <li>
                  <b>Lucide Icons</b> – For beautiful, customisable open-source icons
                </li>
                <li>
                  <b>Phosphor Icons</b> – For their elegantly designed icon system
                </li>
              </ul>
            </div>
            <div className="hrContainer">
              <hr className="homeHr" />
              <p>
                <AirTrafficControlIcon size={40} />
              </p>
              <hr className="homeHr" />
            </div>
          </div>
        </div>
        <Footer setTab={setTab} />
      </div>
    </>
  );
};

export default Home;
