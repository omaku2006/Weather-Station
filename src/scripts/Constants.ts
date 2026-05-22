export const weatherCode: Record<
  string,
  { label: string; image: { url: string[]; source: string[] }; icon: string }
> = {
  // ☀️ Clear
  '113': {
    label: 'Sunny',
    image: {
      url: [
        '/weather/sunny1.jpg',
        '/weather/sunny2.jpg',
        '/weather/sunny3.jpg',
        '/weather/sunny4.jpg',
        '/weather/sunny5.jpg',
        '/weather/sunny6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'SunIcon',
  },

  // 🌤️ Partly Cloudy
  '116': {
    label: 'Partly Cloudy',
    image: {
      url: [
        '/weather/partlyCloudy1.jpg',
        '/weather/partlyCloudy2.jpg',
        '/weather/partlyCloudy3.jpg',
        '/weather/partlyCloudy4.jpg',
        '/weather/partlyCloudy5.jpg',
        '/weather/partlyCloudy6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudSunIcon',
  },

  // ☁️ Cloudy
  '119': {
    label: 'Cloudy',
    image: {
      url: [
        '/weather/cloudy1.jpg',
        '/weather/cloudy2.jpg',
        '/weather/cloudy3.jpg',
        '/weather/cloudy4.jpg',
        '/weather/cloudy5.jpg',
        '/weather/cloudy6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudIcon',
  },
  '122': {
    label: 'Overcast',
    image: {
      url: [
        '/weather/overcast1.jpg',
        '/weather/overcast2.jpg',
        '/weather/overcast3.jpg',
        '/weather/overcast4.jpg',
        '/weather/overcast5.jpg',
        '/weather/overcast6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudyIcon',
  },

  // 🌫️ Mist / Fog
  '143': {
    label: 'Mist',
    image: {
      url: [
        '/weather/fog1.jpg',
        '/weather/fog2.jpg',
        '/weather/fog3.jpg',
        '/weather/fog4.jpg',
        '/weather/fog5.jpg',
        '/weather/fog6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudFogIcon',
  },
  '248': {
    label: 'Fog',
    image: {
      url: [
        '/weather/fog1.jpg',
        '/weather/fog2.jpg',
        '/weather/fog3.jpg',
        '/weather/fog4.jpg',
        '/weather/fog5.jpg',
        '/weather/fog6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudFogIcon',
  },
  '260': {
    label: 'Freezing Fog',
    image: {
      url: [
        '/weather/freezingFog1.jpg',
        '/weather/freezingFog2.jpg',
        '/weather/freezingFog3.jpg',
        '/weather/freezingFog4.jpg',
        '/weather/freezingFog5.jpg',
        '/weather/freezingFog6.jpg',
      ],
      source: ['pexels', 'pexels', 'pexels', 'unsplash', 'unsplash', 'unsplash'],
    },
    icon: 'CloudFogIcon',
  },

  // 🌦️ Light Rain
  '176': {
    label: 'Light Showers',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSunRainIcon',
  },
  '263': {
    label: 'Light Showers',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSunRainIcon',
  },
  '266': {
    label: 'Light Rain',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudDrizzleIcon',
  },
  '293': {
    label: 'Light Rain',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudDrizzleIcon',
  },
  '296': {
    label: 'Light Rain',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudDrizzleIcon',
  },
  '353': {
    label: 'Light Showers',
    image: {
      url: [
        '/weather/lightRain1.jpg',
        '/weather/lightRain2.jpg',
        '/weather/lightRain3.jpg',
        '/weather/lightRain4.jpg',
        '/weather/lightRain5.jpg',
        '/weather/lightRain6.jpg',
        '/weather/lightRain7.jpg',
        '/weather/lightRain8.jpg',
        '/weather/lightRain9.jpg',
        '/weather/lightRain10.jpg',
        '/weather/lightRain11.jpg',
        '/weather/lightRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSunRainIcon',
  },

  // 🌧️ Heavy Rain
  '299': {
    label: 'Heavy Showers',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudHailIcon',
  },
  '302': {
    label: 'Heavy Rain',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudRainWindIcon',
  },
  '305': {
    label: 'Heavy Showers',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudHailIcon',
  },
  '308': {
    label: 'Heavy Rain',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudRainWindIcon',
  },
  '356': {
    label: 'Heavy Rain',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudRainWindIcon',
  },
  '359': {
    label: 'Heavy Rain',
    image: {
      url: [
        '/weather/heavyRain1.jpg',
        '/weather/heavyRain2.jpg',
        '/weather/heavyRain3.jpg',
        '/weather/heavyRain4.jpg',
        '/weather/heavyRain5.jpg',
        '/weather/heavyRain6.jpg',
        '/weather/heavyRain7.jpg',
        '/weather/heavyRain8.jpg',
        '/weather/heavyRain9.jpg',
        '/weather/heavyRain10.jpg',
        '/weather/heavyRain11.jpg',
        '/weather/heavyRain12.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudRainWindIcon',
  },

  // 🌨️ Sleet
  '179': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '182': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '185': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '281': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '284': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '311': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '314': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '317': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '350': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '362': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '365': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '374': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '377': {
    label: 'Light Sleet',
    image: {
      url: [
        '/weather/sleet1.jpg',
        '/weather/sleet2.jpg',
        '/weather/sleet3.jpg',
        '/weather/sleet4.jpg',
        '/weather/sleet5.jpg',
        '/weather/sleet6.jpg',
        '/weather/sleet7.jpg',
        '/weather/sleet8.jpg',
        '/weather/sleet9.jpg',
        '/weather/sleet10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },

  // ❄️ Light Snow
  '227': {
    label: 'Light Snow',
    image: {
      url: [
        '/weather/lightSnow1.jpg',
        '/weather/lightSnow2.jpg',
        '/weather/lightSnow3.jpg',
        '/weather/lightSnow4.jpg',
        '/weather/lightSnow5.jpg',
        '/weather/lightSnow6.jpg',
        '/weather/lightSnow7.jpg',
        '/weather/lightSnow8.jpg',
        '/weather/lightSnow9.jpg',
        '/weather/lightSnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '320': {
    label: 'Light Snow',
    image: {
      url: [
        '/weather/lightSnow1.jpg',
        '/weather/lightSnow2.jpg',
        '/weather/lightSnow3.jpg',
        '/weather/lightSnow4.jpg',
        '/weather/lightSnow5.jpg',
        '/weather/lightSnow6.jpg',
        '/weather/lightSnow7.jpg',
        '/weather/lightSnow8.jpg',
        '/weather/lightSnow9.jpg',
        '/weather/lightSnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '323': {
    label: 'Light Snow',
    image: {
      url: [
        '/weather/lightSnow1.jpg',
        '/weather/lightSnow2.jpg',
        '/weather/lightSnow3.jpg',
        '/weather/lightSnow4.jpg',
        '/weather/lightSnow5.jpg',
        '/weather/lightSnow6.jpg',
        '/weather/lightSnow7.jpg',
        '/weather/lightSnow8.jpg',
        '/weather/lightSnow9.jpg',
        '/weather/lightSnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '326': {
    label: 'Light Snow',
    image: {
      url: [
        '/weather/lightSnow1.jpg',
        '/weather/lightSnow2.jpg',
        '/weather/lightSnow3.jpg',
        '/weather/lightSnow4.jpg',
        '/weather/lightSnow5.jpg',
        '/weather/lightSnow6.jpg',
        '/weather/lightSnow7.jpg',
        '/weather/lightSnow8.jpg',
        '/weather/lightSnow9.jpg',
        '/weather/lightSnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '368': {
    label: 'Light Snow',
    image: {
      url: [
        '/weather/lightSnow1.jpg',
        '/weather/lightSnow2.jpg',
        '/weather/lightSnow3.jpg',
        '/weather/lightSnow4.jpg',
        '/weather/lightSnow5.jpg',
        '/weather/lightSnow6.jpg',
        '/weather/lightSnow7.jpg',
        '/weather/lightSnow8.jpg',
        '/weather/lightSnow9.jpg',
        '/weather/lightSnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },

  // ❄️❄️ Heavy Snow
  '230': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '329': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '332': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '335': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '338': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '371': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },
  '395': {
    label: 'Heavy Snow',
    image: {
      url: [
        '/weather/heavySnow1.jpg',
        '/weather/heavySnow2.jpg',
        '/weather/heavySnow3.jpg',
        '/weather/heavySnow4.jpg',
        '/weather/heavySnow5.jpg',
        '/weather/heavySnow6.jpg',
        '/weather/heavySnow7.jpg',
        '/weather/heavySnow8.jpg',
        '/weather/heavySnow9.jpg',
        '/weather/heavySnow10.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudSnowIcon',
  },

  // ⛈️ Thunder
  '200': {
    label: 'Thundery Showers',
    image: {
      url: [
        '/weather/thunderRain1.jpg',
        '/weather/thunderRain2.jpg',
        '/weather/thunderRain3.jpg',
        '/weather/thunderRain4.jpg',
        '/weather/thunderRain5.jpg',
        '/weather/thunderRain6.jpg',
        '/weather/thunderRain7.jpg',
        '/weather/thunderRain8.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudLightningIcon',
  },
  '386': {
    label: 'Thundery Showers',
    image: {
      url: [
        '/weather/thunderRain1.jpg',
        '/weather/thunderRain2.jpg',
        '/weather/thunderRain3.jpg',
        '/weather/thunderRain4.jpg',
        '/weather/thunderRain5.jpg',
        '/weather/thunderRain6.jpg',
        '/weather/thunderRain7.jpg',
        '/weather/thunderRain8.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudLightningIcon',
  },
  '389': {
    label: 'Thundery Rain',
    image: {
      url: [
        '/weather/thunderRain1.jpg',
        '/weather/thunderRain2.jpg',
        '/weather/thunderRain3.jpg',
        '/weather/thunderRain4.jpg',
        '/weather/thunderRain5.jpg',
        '/weather/thunderRain6.jpg',
        '/weather/thunderRain7.jpg',
        '/weather/thunderRain8.jpg',
      ],
      source: [
        'pexels',
        'pexels',
        'pexels',
        'pexels',
        'unsplash',
        'unsplash',
        'unsplash',
        'unsplash',
      ],
    },
    icon: 'CloudLightningIcon',
  },

  // ⛈️❄️ Thunder + Snow
  '392': {
    label: 'Thundery Snow',
    image: { url: ['/weather/thunderSnow.jpg'], source: ['pexels'] },
    icon: 'CloudSnowLightningIcon',
  },
};

// types/weather.ts

export interface WeatherResponse {
  current_condition: CurrentCondition[];
  nearest_area: NearestArea[];
  request: RequestInfo[];
  weather: WeatherDay[];
}

export interface CurrentCondition {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  localObsDateTime: string;
  observation_time: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: ValueWrapper[];
  weatherIconUrl: ValueWrapper[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

export interface NearestArea {
  areaName: ValueWrapper[];
  country: ValueWrapper[];
  latitude: string;
  longitude: string;
  population: string;
  region: ValueWrapper[];
  weatherUrl: ValueWrapper[];
}

export interface RequestInfo {
  query: string;
  type: string;
}

export interface WeatherDay {
  astronomy: Astronomy[];
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: Hourly[];
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
}

export interface Astronomy {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

export interface Hourly {
  DewPointC: string;
  DewPointF: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
  HeatIndexC: string;
  HeatIndexF: string;
  WindChillC: string;
  WindChillF: string;
  WindGustKmph: string;
  WindGustMiles: string;
  chanceoffog: string;
  chanceoffrost: string;
  chanceofhightemp: string;
  chanceofovercast: string;
  chanceofrain: string;
  chanceofremdry: string;
  chanceofsnow: string;
  chanceofsunshine: string;
  chanceofthunder: string;
  chanceofwindy: string;
  cloudcover: string;
  diffRad: string;
  humidity: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  shortRad: string;
  tempC: string;
  tempF: string;
  time: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: ValueWrapper[];
  weatherIconUrl: ValueWrapper[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

export interface ValueWrapper {
  value: string;
}
