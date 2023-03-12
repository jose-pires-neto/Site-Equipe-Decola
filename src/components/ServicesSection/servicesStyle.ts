import { styled } from '../../styles/index';

export const ServicesSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$brandBlue300',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.5rem',
  paddingTop: '6rem',

  span: {
    color: '$brandBlue800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: '1rem',

    hr: {
      width: '30%',
      height: '2px',
      border: 'none',
      backgroundColor: '$brandBlue800',
    },
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },

  h2: {
    fontSize: '3rem',
    textAlign: 'center',
    maxWidth: '40rem',
    fontFamily: 'Orbitron',
  },

  '@tablet': {
    h2: {
      maxWidth: '33rem',
      fontSize: '2.5rem',
    },
  },

  '@mobile': {
    h2: {
      fontSize: '2rem',
    },

    overflowY: 'hidden',
  },

  '@largeMobile': {
    h2: {
      fontSize: '2rem',
    },
  },
});

export const ServicesField = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '76vw',
  gap: '2.5rem 2rem',
  marginTop: '3rem',
  marginBottom: '2rem',
});

export const ServicesCard = styled('div', {
  maxWidth: '22rem',
  height: '16rem',
  border: '1px solid $brandBlue400',
  borderRadius: '0.375rem',
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: '$white',
  transition: 'all 0.3s ease-in-out',

  h3: {
    marginBottom: '1rem',
    fontSize: '1.3rem',
    fontFamily: 'Orbitron',
  },
  p: {
    textAlign: 'left',
    fontSize: '1.1rem',
  },
  img: {
    alignItems: 'left',
    marginBottom: '0.5rem',
    paddingBottom: '0.3rem',
  },
  '&:hover': {
    // transform: 'scale(1.05) !important',
    backgroundColor: '$brandBlue200',

    h3: {
      color: '$brandBlueHover',
    },
    p: {
      color: '$brandBlue800',
    },
  },

  '@laptop': {
    maxWidth: '18rem',
  },

  '@mobile': {
    width: '16rem',
    h3: {
      fontSize: '1rem',
    },
    p: {
      fontSize: '1rem',
    },
  },
});
