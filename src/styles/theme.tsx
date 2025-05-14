import 'styled-components';

// theme.ts
export const theme = {
  colors: {
    background: '#fff8f0',
    text: '#333',
    primary: '#B38867',
    accent: '#6F4E37',
  },
};

// styled.d.ts
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      accent: string;
    };
  }
}