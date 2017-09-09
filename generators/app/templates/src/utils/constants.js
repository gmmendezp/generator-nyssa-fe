import { color } from 'csx'

export const CSS = {
  BREAKPOINT_SMALL: 480,
  BREAKPOINT_MEDIUM: 768,
  BREAKPOINT_LARGE: 1000,
  BREAKPOINT_XLARGE: 1200,
  APP_MAX_WIDTH: '1200px',
  FONT_PRIMARY: 'Raleway, Helvetica, sans-serif',
  FONT_SPECIAL: "'Arima Madurai', cursive",
  TEXT_COLOR_PRIMARY: '#333',
  TEXT_COLOR_SECONDARY: '#ccc',
  TEXT_COLOR_TERTIARY: color('#ccc')
    .darken(0.8)
    .toHexString(),
  TEXT_COLOR_HEADER: '#333',
  BG_COLOR_PRIMARY: '#fff',
  BG_COLOR_MENU: '#222822',
  BG_COLOR_MENU_HOVER: color('#222822')
    .lighten(0.2)
    .toHexString(),
  BG_COLOR: '#cff09e',
  ERROR_COLOR: color('#c00').toHexString(),
  WARNING_COLOR: color('#c30').toHexString()
}

export default {
  CSS
}
