import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2188FF',
    primaryHover: '#0d4de4',
    secondary: '#ffaa21',
    bg: '#eff4fb',
    white: '#ffffff',
    textDark: '#252525',
    textLight: '#868686',
    border: '#dbe1e9',
    danger: '#eb4d4b',
    success: '#20bf6b'
  },
  fonts: {
    main: '"Poppins", sans-serif'
  }
};

export const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.textDark};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;