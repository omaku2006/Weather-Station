import './Footer.css';
import { AirTrafficControlIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { Cloud, SquareArrowOutUpRight } from 'lucide-react';
import { InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { useCallback } from 'react';
import TextTypeAnimation from './TextTypeAnimation';

type FooterProps = {
  setTab?: (tab: string) => void; // Add this
};

const Footer = ({ setTab }: FooterProps) => {
  const handleQuickLink = useCallback(
    (tab: string) => {
      if (setTab) {
        setTab(tab);
      }
    },
    [setTab]
  );

  const clouds = [
    { Icon: Cloud, size: 60, delay: '0s', duration: '12s', top: '10px', opacity: 0.6 },
    { Icon: Cloud, size: 50, delay: '3s', duration: '10s', top: '-5px', opacity: 0.4 },
    { Icon: Cloud, size: 50, delay: '4s', duration: '8s', top: '-10px', opacity: 0.4 },
    { Icon: Cloud, size: 70, delay: '6s', duration: '14s', top: '5px', opacity: 0.7 },
    { Icon: Cloud, size: 40, delay: '1.5s', duration: '9s', top: '30px', opacity: 0.3 },
    { Icon: Cloud, size: 40, delay: '2.5s', duration: '14s', top: '-15px', opacity: 0.3 },
    { Icon: Cloud, size: 60, delay: '4s', duration: '11s', top: '15px', opacity: 0.5 },
    { Icon: Cloud, size: 55, delay: '8s', duration: '13s', top: '0px', opacity: 0.4 },
  ];

  return (
    <footer>
      <div id="transparentBrandName">
        <h1>WEATHER STATION</h1>
      </div>
      <div className="leftPart">
        <section className="brandSection">
          <div className="footerBrandIcon">
            <div className="floatingCloud">
              {clouds.map((cloud, i) => (
                <div
                  className="cloudContainer"
                  style={{ animationDelay: cloud.delay, animationDuration: cloud.duration }}
                >
                  <cloud.Icon
                    fill="#fff"
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
            <AirTrafficControlIcon size={100} weight="fill" className="footerIcon" />
          </div>
          <div className="footerBrandName">
            <h1>
              <TextTypeAnimation
                text="Weather Station"
                infinite={true}
                showCursor={true}
                duration={250}
              />
            </h1>
          </div>
        </section>
      </div>
      <div className="betweenPart">
        <div className="QuickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => handleQuickLink('Home')}>
              Home&nbsp;&nbsp;&nbsp;
              <SquareArrowOutUpRight />
            </li>
            <li onClick={() => handleQuickLink('Weather')}>
              Weather&nbsp;&nbsp;&nbsp;
              <SquareArrowOutUpRight />
            </li>
            <li onClick={() => handleQuickLink('About')}>
              About&nbsp;&nbsp;&nbsp;
              <SquareArrowOutUpRight />
            </li>
          </ul>
        </div>
      </div>
      <div className="rightPart">
        <h3>Follow Me</h3>
        <div
          className="twitter"
          onClick={() => {
            window.open('https://x.com/Om_Upadhyay2006');
          }}
        >
          <TwitterLogo size={40} />
          <p>Twitter (X)</p>
        </div>
        <div
          className="insta"
          onClick={() => {
            window.open('https://www.instagram.com/omaku2006?igsh=bmpkYXUzajE2NHl5');
          }}
        >
          <InstagramLogo size={40} />
          <p>Instagram</p>
        </div>
        <div
          className="github"
          onClick={() => {
            window.open('https://github.com/omaku2006');
          }}
        >
          <GithubLogoIcon size={40} />
          <p>Guthub</p>
        </div>
        <div
          className="linkedin"
          onClick={() => {
            window.open('https://www.linkedin.com/in/om-upadhyay-1417612a8/');
          }}
        >
          <LinkedinLogo size={40} />
          <p>LinkedIN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
