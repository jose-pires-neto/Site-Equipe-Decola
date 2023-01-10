import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',

      gray700: '#212529',
      gray400: '#495057',

      brandBlueHover: '#005E6B',
      brandBlue800: '#0090A5',
      brandBlue400: '#B9F2FF',
      brandBlue300: '#DBEEFF',
      brandBlue200: '#F0F8FF',
    },
  },
  media: {
    mobile: '(max-width: 376px)',
    largeMobile: '(max-width: 500px)',
    tablet: '(max-width: 820px)',
    laptopTab: '(max-width: 975px)',
    laptop: '(max-width: 1270px)',
  },
});
