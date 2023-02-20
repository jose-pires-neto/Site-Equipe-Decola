import { styled } from '../../styles/index';

export const DecolaSection = styled('section', {
  backgroundColor: '$brandBlue300',
  padding: '6rem 4rem',

  '@tablet': {
    padding: '4rem 2rem',
  },
});

export const DecolaContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const DecolaImage = styled('div', {
  '@largeLaptop': {
    display: 'none',
  },
});

export const DecolaText = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '55rem',
  alignItems: 'center',

  img: {
    display: 'none',
  },

  h1: {
    fontSize: '2.7rem',
    fontWeight: 'bold',
  },

  '@largeLaptop': {
    img: {
      display: 'block',
    },
  },
  '@laptopTab': {
    h1: {
      fontSize: '2.2rem',
    },
  },
  '@tablet': {
    img: {
      height: '54%',
      width: '54%',
    },

    h1: {
      fontSize: '2rem',
    },
  },
  '@largeMobile': {
    h1: {
      fontSize: '1.06rem',
    },
  },
  '@mobile': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    h1: {
      fontSize: '1.6rem',
    },

    img: {
      height: '80%',
      width: '80%',
    },
  },
});

export const DecolaTopcs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'baseline',
  gap: '2.75rem',
  paddingTop: '2rem',
  maxWidth: '55rem',

  div: {
    display: 'flex',
    alignItems: 'center',

    img: {
      padding: '0',
      marginRight: '1rem',
    },

    h2: {
      fontSize: '2.5rem',
      fontFamily: 'Orbitron',
      color: '$brandBlue800',
    },
    '.hrMission': {
      marginLeft: '2rem',
    },
    '.hrVision': {
      marginLeft: '3.57rem',
    },
    hr: {
      margin: '0 0.5rem',
      padding: '0 0.08rem',
      height: '5rem',
      border: 'none',
      backgroundColor: '$brandBlue800',
    },
    p: {
      fontSize: '1.4rem',
    },

    '@largeMobile': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '.hrMission': {
        marginLeft: '0',
      },
      '.hrVision': {
        marginLeft: '0',
      },

      hr: {
        height: '2px',
        width: '50%',
      },
      p: {
        fontSize: '1.2rem',
        textAlign: 'center',
      },
    },
  },
});
