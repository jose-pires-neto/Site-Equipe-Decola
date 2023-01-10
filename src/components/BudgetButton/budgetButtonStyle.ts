import { styled } from '../../styles';

export const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const Button = styled('button', {
  backgroundColor: '$brandBlue800',
  width: '40rem',
  padding: '1rem 3rem',
  border: 'none',
  borderRadius: '40px',
  color: 'white',

  ':hover': {
    cursor: 'pointer',
  },

  p: {
    fontSize: '1.8rem',
    textAlign: 'center',
  },

  '@tablet': {
    padding: '1rem',
    p: {
      fontSize: '1.4rem',
    },
  },

  '@largeMobile': {
    maxWidth: '25rem',
    marginBottom: '1.4rem',
    padding: '1rem 2.4rem',
    p: {
      fontSize: '1.2rem',
    },
  },

  '@mobile': {
    padding: '1rem 2rem',
    p: {
      fontSize: '1rem',
    },
  },
});
