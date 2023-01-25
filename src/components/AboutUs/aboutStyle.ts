import { styled } from '../../styles/index';

export const AboutSection = styled('section', {
  backgroundColor: '$brandBlue200',
  padding: '1rem',
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      padding: '1rem 0',
      width: '20rem',
      height: 'auto',
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
    marginBottom: '1.7rem',
  },
  p: {
    fontSize: '1.5rem',
    marginBottom: '1.2rem',
    textAlign: 'justify',
  },

  '@laptopTab': {
    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1.2rem',
    },
  },
});

export const AboutTopcs = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '10rem',
  alignItems: 'baseline',
  paddingBottom: '6rem',
  paddingTop: '2rem',

  div: {
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: '18rem',

    img: {
      padding: '0',
    },

    h2: {
      fontSize: '2.5rem',
      fontFamily: 'Orbitron',
      paddingBottom: '0.2rem',
      color: '$brandBlue800',
    },
    hr: {
      width: '100%',
      height: '2px',
      border: 'none',
      backgroundColor: '$brandBlue800',
    },
  },
});
