import system from 'system-components';
import { MenuElement } from './MenuElement';

export const Menu = system(
  {
    position: 'fixed',
    p: '16px',
    background: 'white',
    borderRadius: '3px',
    width: '200px',
  },
  {
    zIndex: 2,
    top: '60px',
    right: '50px',
    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.15)',
  }
);

Menu.Element = MenuElement;
