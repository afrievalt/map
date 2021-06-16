/**
 * Assuming there is global font-size of 16px
 * This is the browser default. But just to be sure,
 * we set it on html tag as well in global css
 */
const body = 16

/**
  * We are using System UI theme specification: https://system-ui.com/theme
  * with one small change - we use objects instead of arrays.
  */

export const space = {
  0: 0,
  1: (1 * 4) / body + 'rem',
  2: (2 * 4) / body + 'rem',
  3: (3 * 4) / body + 'rem',
  4: (4 * 4) / body + 'rem',
  5: (5 * 4) / body + 'rem',
  6: (6 * 4) / body + 'rem',
  7: (7 * 4) / body + 'rem',
  8: (8 * 4) / body + 'rem',
  9: (9 * 4) / body + 'rem',
  10: (10 * 4) / body + 'rem'
}

export const size = space

export const fontSizes = {
  1: 10 / body + 'rem',
  2: 12 / body + 'rem',
  3: 14 / body + 'rem',
  4: 16 / body + 'rem',
  5: 20 / body + 'rem',
  6: 24 / body + 'rem'
}
export const radii = {
  0: 0,
  1: '2px',
  2: '4px',
  3: '16px',
  4: '50%'
}
export const colors = {
  grays: {
    100: '#f5faff',
    200: '#E1E7EC',
    300: '#D1D9E0',
    400: '#C8D0D7',
    500: '#AEBECD',
    600: '#929FB1',
    700: '#6E7A8A',
    800: '#404B5A',
    900: '#202833'
  },
  white: '#fff',
  blue: '#535bcf',
  reds: {
    300: '#E06161',
    800: '#821919'
  },
  yellows: {
    100: '#FDF3D7',
    300: '#F8E8BA',
    900: '#5C4813'
  },
  greens: {
    100: '#E3FCEC',
    200: '#A8EEC1',
    700: '#259D58',
    900: '#145239'
  }
}
