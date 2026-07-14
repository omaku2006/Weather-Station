<div align="center">
  <img src="/favicon.svg" alt="Weather Station Logo" width="80" height="80" />
  <h1 align="center">🌤️ Weather Station</h1>
  <p align="center">
    <strong>Your Personal Weather Companion</strong>
    <br />
    A beautiful, open-source weather application with glassmorphism design,
    <br />
    dynamic imagery, and an interactive celestial tracker.
  </p>

  <p>
    <a href="https://weather-station-iota.vercel.app" target="_blank">
      <strong>🌐 Live Demo</strong>
    </a>
    &nbsp;|&nbsp;
    <a href="#-features">Features</a>
    &nbsp;|&nbsp;
    <a href="#-tech-stack">Tech Stack</a>
    &nbsp;|&nbsp;
    <a href="#-getting-started">Getting Started</a>
    &nbsp;|&nbsp;
    <a href="#-project-structure">Project Structure</a>
    &nbsp;|&nbsp;
    <a href="#-api-credits">API Credits</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License" />
  </p>
</div>

---

## ✨ Features

### 🌦️ Real-Time Weather Data
- **Live conditions** — Temperature, "feels like" index, humidity, cloud cover, UV index, visibility, air pressure, wind speed & direction
- **3-day forecast** — Today, tomorrow, and day after tomorrow with detailed hourly breakdowns
- **8 time-slot breakdown** — Every 3 hours for precise planning
- **Smart unit toggles** — Switch between °C/°F and Km/Miles on the fly

### 🎨 Glassmorphism Design
- **Frosted glass UI** — Premium glass-morphism cards with soft blur backgrounds and subtle borders
- **Smooth hover animations** — Cards elevate gracefully with scale transforms, shadow changes, and colored border accents
- **Dynamic backgrounds** — Weather-appropriate images from Unsplash & Pexels that change based on conditions
- **Full responsiveness** — Seamless experience across desktop, tablet, and mobile

### ☀️🌙 Interactive Sun & Moon Tracker
- **Animated celestial display** — Watch the sun and moon move across a curved visualization based on real astronomical data
- **Real-time updates** — Sun/moon positions update every minute
- **Complete astronomy data** — Sunrise, sunset, moonrise, moonset, moon phase, and moon illumination

### 📍 Smart Location Features
- **City search** — Enter any city name worldwide
- **Auto location detection** — Finds the nearest weather station to your search
- **Live local time** — Each city displays its precise local time, refreshed every minute

### 📊 Comprehensive Metrics
| Metric | Description |
|--------|-------------|
| 🌡️ Temperature | Current, feels-like, min, max, and average |
| 💧 Humidity | Current percentage |
| ☁️ Cloud Cover | Sky condition percentage |
| ☀️ UV Index | With safety scale (Low → Extreme) |
| 👁️ Visibility | In Km or Miles |
| 🌬️ Air Pressure | In hPa |
| 💨 Wind | Speed, gusts, and direction (16-point) |
| 🌨️ Precipitation | Rain, snow, sleet chances |
| ⚡ Additional | Dew point, heat index, wind chill |

### 🔄 Smart Data Refresh
- **Core weather data** — Fetches on each city search
- **Time & astronomy** — Auto-refreshes every minute via `setInterval`
- **Efficient caching** — Smart balance between fresh data and performance

### 📱 Additional Features
- **Animated numbers** — Smooth counting animations for all numeric data
- **Typewriter effects** — Stylish text animations throughout the UI
- **Scroll-based animations** — Elements fade in as you scroll using IntersectionObserver
- **PWA-ready** — Optimized meta tags, favicon, and OG images
- **SEO optimized** — Dynamic meta tags per page with JSON-LD structured data
- **Analytics** — Google Analytics 4 & Vercel Analytics integrated

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **TypeScript 6** | Type safety |
| **Vite 8** | Build tool & dev server |
| **React Router 7** | Client-side routing |
| **Axios** | HTTP requests |
| **Motion** | Animations |
| **Lucide React** | Icon library |
| **Phosphor Icons** | Additional icons |
| **Radix UI Popover** | Accessible popovers |
| **React CountUp** | Animated numbers |
| **React Helmet Async** | Dynamic SEO meta tags |
| **React GA4** | Google Analytics |
| **Vercel Analytics** | Deployment analytics |
| **CSS** | Custom glassmorphism styles |

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js ≥18

### Installation

```bash
# Clone the repository
git clone https://github.com/omaku2006/Weather-Station.git
cd Weather-Station

# Install dependencies
bun install
# or: npm install

# Start the development server
bun run dev
# or: npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
bun run build
# or: npm run build
```

### Preview Production Build

```bash
bun run preview
# or: npm run preview
```

### Lint

```bash
bun run lint
# or: npm run lint
```

---

## 📁 Project Structure

```
weather-station/
├── public/                      # Static assets
│   ├── favicon.svg              # Favicon
│   ├── robots.txt               # Search engine config
│   ├── sitemap.xml              # SEO sitemap
│   └── google757ded61fa019258.html  # Google Search Console
├── src/
│   ├── main.tsx                 # Entry point
│   ├── App.tsx                  # Root component with routing
│   ├── App.css                  # Global app styles
│   ├── index.css                # Base styles
│   ├── scripts/
│   │   └── Constants.ts         # Weather codes, types, image mappings
│   ├── components/
│   │   ├── Navbar.tsx / .css        # Navigation sidebar + mobile overlay
│   │   ├── NavbarContext.tsx         # Navbar open/close state
│   │   ├── SearchBar.tsx / .css     # City search input
│   │   ├── FetchData.tsx            # Weather context provider (API logic)
│   │   ├── CardContainer.tsx / .css # Hourly forecast card (detailed)
│   │   ├── CardContainerSummary.tsx # Hourly forecast card (summary)
│   │   ├── AstronomySummary.tsx     # Sun/Moon position tracker
│   │   ├── AnimatedNumber.tsx       # Number counting animation
│   │   ├── TextTypeAnimation.tsx    # Typewriter text effect
│   │   ├── Icon.tsx / .css          # Dynamic weather icon
│   │   ├── InfoPopover.tsx          # Location info tooltip
│   │   ├── Model.tsx / .css         # Image lightbox modal
│   │   ├── Footer.tsx / .css        # Page footer
│   │   ├── Tab.tsx                  # Tab navigation component
│   │   └── ui/
│   │       └── ToggleButton.tsx     # °C/°F and Km/Miles toggle
│   ├── pages/
│   │   ├── Home.tsx / .css          # Landing page with hero, features
│   │   ├── WeatherPart1.tsx / .css  # Current conditions + hourly summary
│   │   ├── WeatherPart2.tsx / .css  # Astronomy + detailed hourly cards
│   │   ├── About.tsx / .css         # About page with story & credits
│   │   └── Loading.tsx / .css       # Loading spinner
├── index.html                  # HTML entry
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── vercel.json                 # Vercel deployment config
└── eslint.config.js            # ESLint configuration
```

---

## 🌐 API Credits

Weather Station relies on these free, public APIs and resources:

### [wttr.in](https://wttr.in) — Weather Data
The backbone of the app. wttr.in provides accurate, real-time weather data in JSON format for any location worldwide. It's a console-oriented weather forecast service that supports multiple data formats.

> *"wttr.in is a great service that provides weather data in a console-friendly format. It's used by thousands of developers worldwide."*

### [TimeAPI.io](https://timeapi.io) — Location-Based Time
Provides precise local time and date based on geographic coordinates. Ensures every city displays its correct local time.

### [Unsplash](https://unsplash.com) & [Pexels](https://pexels.com) — Weather Imagery
Thousands of stunning, royalty-free photographs that dynamically change based on weather conditions — rainy images for rain, snowy images for snow, and more.

### [Lucide React](https://lucide.dev) & [Phosphor Icons](https://phosphoricons.com) — Icons
Beautifully designed, customizable open-source icon libraries.

---

## 📄 License

This project is **MIT Licensed** — free to use, modify, and distribute.

---

## 🙏 Acknowledgements

Special thanks to:

- **[wttr.in](https://wttr.in)** — For providing accurate, real-time weather data
- **[TimeAPI.io](https://timeapi.io)** — For reliable timezone and time information
- **[Unsplash](https://unsplash.com)** & **[Pexels](https://pexels.com)** — For stunning, freely usable photograph libraries
- **[Lucide Icons](https://lucide.dev)** & **[Phosphor Icons](https://phosphoricons.com)** — For beautiful open-source icons
- **[HuXn Dev](https://github.com/huxn-dev)** — For teaching and guidance

---

<div align="center">
  <p>
    <strong>Built with ❤️ by <a href="https://github.com/omaku2006">Om Upadhyay</a></strong>
    <br />
    <sub>Amreli, Gujarat, India</sub>
  </p>

  <p>
    <a href="https://github.com/omaku2006">GitHub</a>
    &nbsp;·&nbsp;
    <a href="https://weather-station-iota.vercel.app">Live Demo</a>
  </p>

  <br />

  <p>
    <i>"Open Source. Free Forever. Made with ❤️"</i>
  </p>
</div>
