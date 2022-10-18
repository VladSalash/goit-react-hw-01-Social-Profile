import getRandomHexColor from './components/Statistics/getRandomHexColor';
export const theme = Object.freeze({
  colors: {
    body: '#757575',
    text: '#000',
    backgroundProfile: '#e6ecf5',
    backgroundStats: '#f2f4f7',
    backgroundStnStatistics: '#e6ecf5',
    color: '#ffff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',

    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',

    backgroundRandomColor: getRandomHexColor(),

  },
  fonts: {
    body:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    headings: 'Roboto, sans-serif',
    monospace: 'monospace',
  },

  space: [0, 2, 4, 8, 16, 32, 64],

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl:40,
    xxl: 64,
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeight: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1200 px',
    margin: '0 auto',
    padding: '20px 15px',
    backgroundColor: '#E3E9EF',
  },

});
