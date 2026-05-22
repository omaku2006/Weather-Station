import './Navbar.css';
import { useNavbarContext } from './NavbarContext';
import { type ElementType, type FC } from 'react';
import TextTypeAnimation from './TextTypeAnimation';
import { AirTrafficControlIcon } from '@phosphor-icons/react';
import { X } from 'lucide-react';

type Props = {
  tabs: { icon: ElementType; label: string; path: string }[];
  setTab: (tab: string) => void;
  tab: string;
};

const Navbar: FC<Props> = ({ tabs, setTab, tab }) => {
  const { open, setOpen } = useNavbarContext();
  const activeTab = tabs.findIndex((t) => t.label === tab);

  return (
    <>
      {/* ===== DESKTOP — Left Sidebar ===== */}
      <header className={`header ${open ? 'open' : ''}`}>
        <nav>
          <div className="navBrand" onClick={() => setOpen()}>
            <h1>
              {open ? (
                <TextTypeAnimation key="open" text="Weather Station" duration={80} />
              ) : (
                <AirTrafficControlIcon size={40} weight="fill" />
              )}
            </h1>
          </div>
          <ol>
            {tabs.map((t, i) => (
              <li
                key={t.label}
                className={activeTab === i ? 'active' : ''}
                onClick={() => setTab(t.label)}
              >
                <div className="tabContainer">
                  <div className="tabIconContainer">
                    <t.icon
                      size={32}
                      className="tabIcon"
                      weight={activeTab === i ? 'fill' : 'regular'}
                    />
                  </div>
                  <p>{t.label}</p>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {/* ===== MOBILE — Hamburger Button ===== */}
      <button className="hamburger" onClick={() => setOpen()}>
        {open ? <X size={28} /> : <AirTrafficControlIcon size={32} weight="fill" />}
      </button>

      {/* ===== MOBILE — Fullscreen Overlay ===== */}
      <div className={`navOverlay ${open ? 'open' : ''}`}>
        <nav className="overlayNav">
          <div className="overlayBrand">
            <AirTrafficControlIcon size={48} weight="fill" />
            <h1>
              {open && (
                <TextTypeAnimation key={`brand-${open}`} text="Weather Station" duration={80} />
              )}
            </h1>
          </div>
          <ol>
            {tabs.map((t, i) => (
              <li
                key={t.label}
                className={activeTab === i ? 'active' : ''}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => {
                  setTab(t.label);
                  setOpen();
                }}
              >
                <div className="tabContainer">
                  <div className="tabIconContainer">
                    <t.icon
                      size={36}
                      className="tabIcon"
                      weight={activeTab === i ? 'fill' : 'regular'}
                    />
                  </div>
                  <p>
                    {open && (
                      <TextTypeAnimation key={`${t.label}-${open}`} text={t.label} duration={60} />
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
