import system from 'system-components';
import { theme } from '../theme';

export const MenuElement = system(
  {
    is: 'li',
  },
  ({ active, theme }) => {
    if (active) {
      return { color: theme.primary[500] };
    }
  }
);
