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
  backgroundColor: '$white',
  borderRadius: 18,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '27.5rem',
  width: '20.625rem',

  '.JPImage': {
    borderRadius: 320,
    border: '4px solid #000000',
    margin: '2rem',
  },

  '.ClebImage': {
    borderRadius: 320,
    border: '4px solid $brandBlue600',
    margin: '2rem',
  },

  '.GorehImage': {
    borderRadius: 320,
    border: '4px solid $green',
    margin: '2rem',
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
});
