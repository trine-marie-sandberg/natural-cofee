import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.tsx';
import { GlobalStyle } from './styles/global.tsx';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
