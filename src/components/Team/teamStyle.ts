import { styled } from '../../styles/index';

export const TeamContainer = styled('section', {
  color: '$white',
  backgroundImage: 'url(backgroundTeam.png)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  padding: '6rem 1rem',

  h1: {
    paddingTop: '6rem',
    fontSize: '3rem',
    fontFamily: 'Orbitron',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p: {
    padding: '4rem 0',
    maxWidth: '82rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  '@largeMobile': {
    h1: {
      fontSize: '2.5rem',
    },
    p: {
      fontSize: '1.5rem',
    },
  },
});

export const CardsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const Card = styled('div', {
  variants: {
    background: {
      black: {
        '.imageProfile': {
          border: '8px solid #000000',
        },
        '&:hover': {
          backgroundColor: '#000000',
        },
      },
      green: {
        '.imageProfile': {
          border: '8px solid $green',
        },
        '&:hover': {
          backgroundColor: '$green',
        },
      },
      blue: {
        '.imageProfile': {
          border: '8px solid $brandBlue600',
        },
        '&:hover': {
          backgroundColor: '$brandBlue600',
        },
      },
    },
  },
  backgroundColor: '$white',
  borderRadius: 18,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '27.5rem',
  width: '20.625rem',
  transition: '0.5s',

  '.imageProfile': {
    borderRadius: 320,
    margin: '2rem',
    width: '10rem',
    height: 'auto',
    transition: '0.5s',
  },

  h2: {
    color: '$gray700',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Orbitron',
    maxWidth: '15rem',
  },
  span: {
    color: '$gray100',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    paddingTop: '0.6rem',
  },
  div: {
    padding: '2rem',
    display: 'none',
    '.socialIcons': {
      width: '6rem',
      height: '3rem',
    },
  },

  '&:hover': {
    '.vector, h2, span': {
      display: 'none',
    },
    div: {
      display: 'block',
    },
    '.imageProfile': {
      width: '100%',
      height: 'auto',
      border: 0,
      borderRadius: 10,
      margin: '0 auto',
    },
  },
});
