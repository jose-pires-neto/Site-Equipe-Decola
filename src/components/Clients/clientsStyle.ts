import { styled } from '../../styles/index';

export const ClientsSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$brandBlue400',

  '.shape-fill': {
    fill: '$brandBlue300',
  },
});

export const ClientsField = styled('div', {
  width: '100%',
  textAlign: 'center',

  span: {
    color: '$brandBlue800',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: '1rem',
    marginTop: '6rem',

    hr: {
      width: '30%',
      height: '2px',
      border: 'none',
      backgroundColor: '$brandBlue800',
    },
  },
  h1: {
    fontFamily: 'Orbitron',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    padding: '1rem',
  },
});

export const ClientsContent = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2.2rem',
  padding: '2.2rem 6rem 11rem 6rem',

  '@largeMobile': {
    padding: '2.2rem 2rem 11rem 2rem',
  },
});

export const ClientsLogos = styled('div', {
  backgroundColor: '$white',
  borderRadius: '8px',
  height: '14.4rem',
  padding: '1rem',
  width: '15rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
