import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    color: '$gray700',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },

  'body, input, textarea, button': {
    fontFamily: 'DM Sans, Orbitron',
    fontWeight: 400,
  },

  '@media screen and (max-width: 480px)': {
    body: {
      overflowY: 'hidden',
    },
  },

  '.chatPopover': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 80,
  },

  '.buttonChat': {
    alignItems: 'center',
    backgroundColor: '$brandBlue800',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    height: '3.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    overflow: 'hidden',
    maxWidth: '3.4rem',
    transition: 'all 0.3s linear',

    img: {
      width: '2rem',
      height: '2rem',
    },

    '&:hover': {
      maxWidth: '8rem',
      borderRadius: '10rem',
    },
  },
});
