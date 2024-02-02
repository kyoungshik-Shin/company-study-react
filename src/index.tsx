import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

/* Theme */
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

// PWA적용
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);
