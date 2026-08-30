import {
  ArrowRight,
  Bubbles,
  Clock,
  Cloud,
  Eye,
  Heart,
  SunMoon,
  WindArrowDown,
} from 'lucide-react';
import './About.css';
import Footer from '../components/Footer';
import { AirTrafficControlIcon } from '@phosphor-icons/react';
import Model from '../components/Model';
import { useEffect, useState } from 'react';
import { DotsThreeOutline } from 'phosphor-react';
import TextTypeAnimation from '../components/TextTypeAnimation';
import { Helmet } from 'react-helmet-async';

const clouds = [
  { Icon: Cloud, size: 60, delay: '0s', duration: '12s', top: '15px', opacity: 0.6 },
  { Icon: Cloud, size: 50, delay: '3s', duration: '10s', top: '-8.5px', opacity: 0.4 },
  { Icon: Cloud, size: 50, delay: '4s', duration: '8s', top: '-15px', opacity: 0.4 },
  { Icon: Cloud, size: 70, delay: '6s', duration: '14s', top: '7.5px', opacity: 0.7 },
  { Icon: Cloud, size: 40, delay: '1.5s', duration: '9s', top: '65px', opacity: 0.3 },
  { Icon: Cloud, size: 40, delay: '2.5s', duration: '14s', top: '-21px', opacity: 0.3 },
  { Icon: Cloud, size: 60, delay: '4s', duration: '11s', top: '88px', opacity: 0.5 },
  { Icon: Cloud, size: 55, delay: '8s', duration: '13s', top: '0px', opacity: 0.4 },
  { Icon: Cloud, size: 55, delay: '8s', duration: '18s', top: '90px', opacity: 0.4 },
];

type Props = { setTab: (tab: string) => void };

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Weather Station',
  description: 'Open-source weather application providing free weather data to everyone',
  url: 'https://weather-station-iota.vercel.app/about',
  founder: {
    '@type': 'Person',
    name: 'Om Upadhyay',
    jobTitle: 'Computer Engineering Student',
    location: 'Gujarat, India',
  },
  sameAs: [
    'https://github.com/omaku2006',
    'https://twitter.com/omupadhyay',
    'https://linkedin.com/in/omupadhyay',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Weather Station',
  description: 'Free open-source weather application with glassmorphism design',
  applicationCategory: 'WeatherApplication',
  operatingSystem: 'Web',
  license: 'MIT',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const About = ({ setTab }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ imgUrl: '', imgAlt: '' });

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

  const openModal = (imgUrl: string, imgAlt: string) => {
    setModalData({ imgUrl, imgAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>About Weather Station | Free Open Source Weather App</title>
        <meta
          name="description"
          content="Learn about Weather Station - a free, open-source weather tracking app built with React. Powered by wttr.in and TimeAPI.io. Meet the developer Om Upadhyay."
        />
        <meta
          name="keywords"
          content="about weather station, open source weather app, weather API, free weather data, weather project, om upadhyay"
        />
        <link rel="canonical" href="https://weather-station-iota.vercel.app/about" />
        <meta property="og:site_name" content="Weather Station" />
        <meta property="og:title" content="About Weather Station | Free Open Source Weather App" />
        <meta
          property="og:description"
          content="Learn about Weather Station - a free, open-source weather tracking app built with React. Powered by wttr.in and TimeAPI.io."
        />
        <meta property="og:url" content="https://weather-station-iota.vercel.app/about" />
        <meta property="og:image" content="https://weather-station-iota.vercel.app/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      </Helmet>
      <div className="aboutUsPage">
        <div className="aboutHeroSection">
          <div className="aboutLeft scrollElement">
            <h1>
              <TextTypeAnimation text="About Weather" duration={150} /> <br />{' '}
              <TextTypeAnimation text="Station" duration={150} />
            </h1>
            <h2>
              <TextTypeAnimation text="Built with passion, " duration={150} />
              <br />
              <TextTypeAnimation text="Designed with precision!" duration={150} />
            </h2>
            <br />
            <p>
              Weather Station is more than just a weather app — it's my first step into the React
              ecosystem, crafted with a vision to make weather forecasting beautiful and intuitive.
              Featuring{' '}
              <b>
                glassmorphism design, dynamic weather imagery and an interactive sun-moon position
                tracker
              </b>
              , this app transforms raw weather data into a visual experience. From farmers planning
              their harvest to cricketers scheduling their matches — Weather Station is built for
              everyone.
              <br />
              <br />
              <q>
                Open Source. Free Forever. Made with <Heart size={28} fill="red" /> in Amreli,
                Gujarat.
              </q>
            </p>
          </div>
          <div className="aboutRight scrollElement">
            <img
              src="/about1.png"
              alt="Weather Station - Live weather dashboard screenshot"
              loading="lazy"
              onClick={() => openModal('/about1.png', 'Page 1')}
            />
            <img
              src="/about2.png"
              alt="Weather Station - Astronomy & forecast screenshot"
              loading="lazy"
              onClick={() => openModal('/about2.png', 'Page 1')}
            />
          </div>
        </div>
        <div className="aboutDetailed">
          <div className="aboutTop">
            <div className="aboutTopLeft scrollElement">
              <h1>
                <TextTypeAnimation text="The Story Behind the Clouds" />
              </h1>
              <p>
                <b>Weather Station</b>was born from a simple idea:
                <b>"Why should weather apps be boring?"</b>As my <b>first React project</b>, I
                wanted to challenge myself — not just to build something functional, but to create
                something <b>visually stunning</b> and <b>meaningful</b>. The result? A weather
                application that doesn't just tell you the forecast — it <b>shows</b>
                you.
              </p>
            </div>
            <div className="aboutTopRight scrollElement">
              <div className="floatingCloud">
                {clouds.map((cloud, i) => (
                  <div
                    className="cloudContainer"
                    style={{ animationDelay: cloud.delay, animationDuration: cloud.duration }}
                  >
                    <cloud.Icon
                      key={i}
                      size={cloud.size}
                      style={{
                        top: cloud.top,
                        opacity: cloud.opacity,
                      }}
                    />
                  </div>
                ))}
              </div>
              <AirTrafficControlIcon size={250} className="WSLogo" />
            </div>
          </div>
          <div className="aboutBottom">
            <div className="aboutBottomLeft scrollElement">
              <div
                className="aboutImageCard"
                onClick={() => openModal('/card1.png', 'Page 1 Glassmorphism')}
              ></div>
              <div
                className="aboutImageCard"
                onClick={() => openModal('/card2.png', 'Page 2 Glassmorphism')}
              ></div>
            </div>
            <div className="aboutBottomRight scrollElement">
              <h1>
                <TextTypeAnimation text="Design Philosophy" duration={150} />
              </h1>
              <p>
                I believe <b>design is not just how it looks, but how it makes you feel.</b>That's
                why Weather Station features:
              </p>
              <ul>
                <li>
                  <p>
                    <b>Glassmorphism UI - </b>Modern, elegant cards with smooth hover effects{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Dynamic Backgrounds - </b>Real images from Unsplash & Pexels that change
                    based on weather conditions <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Rainy? See beautiful rain photography{' '}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Sunny? Vibrant clear sky images <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ No reading needed — the background tells
                    the story!
                  </p>
                </li>
                <li>
                  <p>
                    <b>Live Sun & Moon Position Tracker - </b>A curved visualization showing the
                    exact position of the sun and moon based on real-time calculations — updated
                    every minute!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutThird">
            <div className="aboutThirdTop">
              <div className="aboutThirdTopLeft scrollElement">
                <h1>
                  <TextTypeAnimation text="Features That Matter" duration={150} />
                </h1>
                <p>For Everyone:</p>
                <ul>
                  <li>
                    <b>3-Day Detailed Forecast </b> : Today, tomorrow, and day after tomorrow
                  </li>
                  <li>
                    <b>8 Time-Slot Breakdown </b> : Every 3 hours, so you never miss a beat
                  </li>
                  <li>
                    <b>Astronomy Data </b> : Sunrise, sunset, moonrise, moonset with visual
                    representation
                  </li>
                  <li>
                    <b>Comprehensive Metrics </b> : Humidity, UV index, visibility, pressure, and
                    more
                  </li>
                  <li>
                    <b>Transparent Data </b> : If data isn't available, we show "--" instead of
                    hiding it
                  </li>
                </ul>
                <p>Smart Updates:</p>
                <ul>
                  <li>Auto-refreshes every minute using `setInterval`</li>
                  <li>TimeAPI integration for accurate location-based timing</li>
                  <li>Real-time sun/moon position calculations</li>
                </ul>
              </div>
              <div className="aboutThirdTopRight scrollElement">
                <Clock size={80} className="aboutThirdIcon" />
                <SunMoon size={80} className="aboutThirdIcon" />
                <Bubbles size={80} className="aboutThirdIcon" />
                <Eye size={80} className="aboutThirdIcon" />
                <WindArrowDown size={80} className="aboutThirdIcon" />
                <DotsThreeOutline size={80} className="aboutThirdIcon" />
              </div>
            </div>
            <div className="aboutThirdDown">
              <div className="aboutThirdDownLeft scrollElement">
                <img src="/My Image.jpg" alt="Om Upadhyay - Developer of Weather Station" loading="lazy" />
              </div>
              <div className="aboutThirdDownRight scrollElement">
                <h1>
                  <TextTypeAnimation text="Who Am I?" duration={150} />
                </h1>
                <ul>
                  <li>
                    <b>🎓 Final Year BE in Computer Engineering</b> — 6th semester completed
                  </li>
                  <li>
                    <b>💻 First Project Ever</b> — Weather Station marks the beginning of my
                    development journey
                  </li>
                  <li>
                    <b>🎨 Design Enthusiast</b> — Passionate about creating beautiful, user-friendly
                    interfaces
                  </li>
                  <li>
                    <b>🌱 Learning & Growing</b> — From zero projects to building a full-stack
                    weather app with React
                  </li>
                </ul>

                <p>
                  <b>This Project Taught Me:</b>
                </p>

                <ul>
                  <li>✅ React Hooks & Context API</li>
                  <li>✅ Modern CSS (Glassmorphism, Animations)</li>
                  <li>✅ API Integration & Error Handling</li>
                  <li>✅ Responsive Design Principles</li>
                  <li>
                    ✅ The importance of <b>user experience</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aboutLastWrap">
              <div className="aboutLast scrollElement">
                <h1>
                  <TextTypeAnimation text="Vision for the Future" duration={150} />
                </h1>

                <p>
                  Weather Station is <b>100% Open Source</b> and built with <b>free tools</b>{' '}
                  because I believe technology should be accessible to everyone.
                </p>

                <p>
                  <b>If this app reaches people, I plan to add:</b>
                </p>

                <ul>
                  <li>
                    <b>AI-Powered Insights</b> — Smart weather predictions and recommendations
                  </li>
                  <li>
                    <b>Push Notifications</b> — Alerts for rain, storms, or your preferred weather
                    conditions
                  </li>
                  <li>
                    <b>Multi-Language Support</b> — Including Gujarati, Hindi, and more
                  </li>
                  <li>
                    <b>Interactive Maps</b> — Visual weather radar and location-based forecasts
                  </li>
                </ul>

                <h1>
                  <TextTypeAnimation text="Special Thanks" duration={150} />
                </h1>

                <p>
                  <ArrowRight />
                  This project wouldn't have been possible without the generous contributions of the
                  open-source community and these incredible free resources:
                </p>
                <p>
                  <ArrowRight />A heartfelt thank you to <b>Unsplash</b> and <b>Pexels</b> for
                  providing stunning, royalty-free photographs that bring life to every weather
                  update. Their vast collections of high-quality images make the visual experience
                  truly immersive.
                </p>
                <p>
                  <ArrowRight />
                  Immense gratitude to <b>wttr.in</b> for delivering accurate, real-time weather
                  data that powers every forecast. Their simple yet powerful API is the backbone of
                  this weather station.
                </p>
                <p>
                  <ArrowRight />
                  Special thanks to <b>TimeAPI.io</b> for reliable timezone and location-based time
                  information, ensuring users always see the correct local time for their searched
                  cities.
                </p>
                <p>
                  <ArrowRight />
                  Sincere appreciation to <b>Lucide React</b> and <b>Phosphor Icons</b> for their
                  beautifully designed, customizable open-source icons that add elegance and clarity
                  to the interface.
                </p>
                <p className="highlight">
                  I want to be completely transparent: <strong>AI did not write this code.</strong>
                </p>
                <p>
                  Every component, every glassmorphism effect, every bug fix, and every line of
                  logic was built by me — manually, with patience and practice. But yeah I take much
                  help to make website responsive, but rest of thing is mostly done by only Me.
                </p>
                <p>
                  But I’m deeply grateful to AI for being my{' '}
                  <strong>24/7 learning companion</strong>. Whenever I was stuck, it didn’t hand me
                  ready-made code. Instead, it helped me
                  <em> understand the "why"</em>, debug my own mistakes, and think like a developer.
                </p>
                <p className="closing">
                  Thank you, AI & HuXn Dev, for teaching me — not replacing me. This project is 100%
                  mine, but my learning journey wouldn’t have been this smooth without your
                  guidance. 🌱
                </p>
                <h1>
                  <TextTypeAnimation text="Let's Connect!" duration={150} />
                </h1>

                <p>
                  This is just the beginning. I'm excited to keep building, learning, and creating
                  tools that make a difference.
                </p>

                <p>
                  <i>
                    Weather Station is dedicated to everyone who looks up at the sky and wonders.
                  </i>{' '}
                </p>

                <p>
                  <b>
                    <Heart size={24} fill="red" />{' '}
                    <TextTypeAnimation
                      text="Made with by Om Upadhyay | Amreli, Gujarat, India"
                      duration={100}
                      infinite={true}
                      showCursor={true}
                    />{' '}
                    <Heart size={24} fill="red" />
                  </b>
                </p>
              </div>
            </div>
          </div>
          <Footer setTab={setTab} />
        </div>
        {isModalOpen && (
          <Model imgUrl={modalData.imgUrl} imgAlt={modalData.imgAlt} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default About;
