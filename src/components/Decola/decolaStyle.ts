import { styled } from '../../styles/index';

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
