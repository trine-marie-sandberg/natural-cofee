// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 500;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
