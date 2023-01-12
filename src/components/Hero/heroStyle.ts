import { styled } from '../../styles';

export const Carousel = styled('section', {
  overflow: 'hidden',
  height: 'auto',
  maxHeight: '46rem',

  '@largeLaptop': {
    maxHeight: '42rem',
  },

  '@laptop': {
    maxHeight: '31rem',
  },

  '@largeMobile': {
    height: 'auto',
  },
});

export const SlideContent = styled('div', {
  width: '100%',
  textAlign: 'left',
  height: 'auto',

  img: {
    width: '100%',
    height: '100%',
  },

  '@tablet': {
    height: '40rem',
  },

  '@largeMobile': {
    height: '36rem',

    img: {
      width: '48rem',
      height: '36rem',
    },
  },

  '@mobile': {
    img: {
      width: '40rem',
      height: '30rem',
    },
  },
});

export const SlideCaption = styled('div', {
  variants: {
    ColorText: {
      brandBlue: {
        h1: {
          color: '$brandBlue800',
          textShadow: '2px 1px 4px rgba(0,0,0,0.42);',
        },
      },
      lightBlue: {
        h1: {
          color: '$brandBlue400',
        },
      },
      white: {
        h1: {
          color: '$white',
        },
      },
    },
  },

  position: 'absolute',
  marginTop: '8rem',
  marginLeft: '6rem',

  h1: {
    fontFamily: 'Orbitron',
    fontWeight: 'bold',
    fontSize: '6rem',
    marginBottom: '1rem',
    maxWidth: '70rem',
    textShadow: '2px 1px 4px rgba(0,0,0,0.52);',
  },

  hr: {
    color: '$white',
    maxWidth: '40rem',
    margin: '1rem 0',
    border: '1px solid white',
    boxShadow: 'rgb(0 0 0 / 45%) 2px 1px 4px',
  },

  h3: {
    maxWidth: '46rem',
    fontSize: '2rem',
    color: '$white',
    textShadow: '2px 1px 4px rgba(0,0,0,0.52);',
  },

  '@laptop': {
    marginTop: '6rem',

    h1: {
      fontSize: '5.2rem',
      marginBottom: 0,
    },
  },

  '@laptopTab': {
    h1: {
      fontSize: '4.5rem',
    },
  },

  '@tablet': {
    marginTop: '8rem',
    marginLeft: '3rem',

    h1: {
      fontSize: '3rem',
      marginBottom: '2rem',
    },

    hr: {
      maxWidth: '26rem',
    },

    h3: {
      fontSize: '1.6rem',
      maxWidth: '34rem',
    },
  },

  '@largeMobile': {
    marginLeft: '0.8rem',
    h1: {
      fontSize: '2.4rem',
      marginBottom: '1rem',
    },

    hr: {
      maxWidth: '20rem',
    },

    h3: {
      fontSize: '1.3rem',
      maxWidth: '23rem',
    },
  },
});

export const ButtonSlide = styled('button', {
  variants: {
    backgroundColor: {
      blue: {
        backgroundColor: '$brandBlue800',
        color: '$white',
        '&:hover': {
          backgroundColor: '$brandBlueHover',
          transition: '0.4s',
        },
      },
      transparent: {
        backgroundColor: 'transparent',
        color: '$brandBlue800',
        border: '1px solid #0090A5',
        '&:hover': {
          backgroundColor: '$brandBlueHover',
          color: '$white',
          transition: '0.4s',
        },
      },
    },
  },
  width: '25.9375rem',
  height: '4.8125rem',
  padding: '0.5rem',
  borderRadius: '40px',
  cursor: 'pointer',
  border: 'none',
  fontSize: '2.25rem',
  fontWeight: 'bold',

  '@laptop': {
    width: '22rem',
    height: '4rem',
    fontSize: '2rem',
  },

  '@laptopTab': {
    width: '18rem',
    height: '4rem',
    fontSize: '1.8rem',
  },

  '@largeMobile': {
    width: '14rem',
    height: '3.4rem',
    fontSize: '1.2rem',
  },
});
