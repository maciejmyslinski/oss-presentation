import { default as defaultTheme } from 'mdx-deck/themes';
import merge from 'merge';
import { Provider } from './Provider';

// https://coolors.co/e4572e-29335c-f3a712-a8c686-669bbc
export const theme = merge.recursive(true, defaultTheme, {
  font: 'Averta, sans-serif',
  colors: {
    primary: {
      500: '#29335C',
    },
    success: {
      500: '#A8C686',
    },
    warning: {
      500: '#F3A712',
    },
    error: {
      500: '#E4572E',
    }
  },
  Provider,
});

console.log(theme);
