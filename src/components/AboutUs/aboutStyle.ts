import { styled } from '../../styles/index';

export const AboutSection = styled('section', {
  backgroundColor: '$brandBlue200',
  padding: '4rem 1rem 1rem 1rem',

  a: {
    textDecoration: 'none',
  },

  button: {
    display: 'none',
    width: '18rem',
    height: '3.5rem',
    margin: '0 auto',
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '40px',
    border: 'none',
    color: 'white',
    backgroundColor: '$brandBlue800',
    fontSize: '1.2rem',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$brandBlueHover',
      transition: '0.4s',
    },

    img: {
      width: '1.6rem',
      height: '1.6rem',
    },
  },

  '@tablet': {
    paddingTop: '0',

    button: {
      display: 'flex',
    },
  },
});

export const AboutContent = styled('div', {
  display: 'flex',
  gap: '0 10rem',
  justifyContent: 'center',

  img: {
    borderRadius: '10px',
    padding: '4rem 1rem',
  },

  '@laptop': {
    gap: '5rem',
    img: {
      width: '28rem',
    },
  },

  '@laptopTab': {
    img: {
      width: '24rem',
    },
  },

  '@tablet': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',

    '.imageContent': {
      display: 'none',
    },
  },
});

export const AboutText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',

  maxWidth: '40rem',
  padding: '1rem',

  span: {
    color: '$brandBlue800',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: '1rem',

    hr: {
      width: '84%',
      height: '2px',
      border: 'none',
      backgroundColor: '$brandBlue800',
    },
  },

  h2: {
    fontSize: '2.6rem',
    textAlign: 'left',
    fontFamily: 'Orbitron',
    marginBottom: '4rem',
  },
  '.imageText': {
    display: 'none',
  },
  p: {
    fontSize: '2rem',
    marginBottom: '1.2rem',
    textAlign: 'justify',
  },

  '@laptop': {
    span: {
      hr: {
        width: '70%',
      },
    },

    h2: {
      fontSize: '2.2rem',
    },
    p: {
      fontSize: '1.4rem',
    },
  },

  '@laptopTab': {
    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1.2rem',
    },
  },

  '@tablet': {
    alignItems: 'center',
    h2: {
      marginBottom: '1rem',
    },

    '.imageText': {
      display: 'block',
      height: 'auto',
      width: '18rem',
      padding: '1rem 0',
    },

    span: {
      hr: {
        width: '67%',
      },
    },
  },
});
