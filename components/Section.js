import system from 'system-components';

export const Section = system(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    opacity: '0.5',
  },
  {
    transform: 'scaleX(0.95)',
    transition: 'transform 0.15s ease-out',
  },
  ({ type, theme }) => {
    if (type === 'big') {
      return {
        backgroundColor: theme.colors.primary[500],
        height: '80vh',
      };
    }
    if (type === 'medium') {
      return {
        backgroundColor: theme.colors.success[500],
        height: '60vh',
      };
    }
    if (type === 'small') {
      return {
        backgroundColor: theme.colors.warning[500],
        height: '20vh',
      };
    }
  },
  ({ active }) => {
    if (active) {
      return {
        opacity: '1',
        zIndex: '1',
        boxShadow: '0 0 20px rgba(0, 0, 0, .5)',
        transform: 'scale(1)',
      };
    }
  }
);

Section.defaultProps.blacklist = [...Section.defaultProps.blacklist, 'active'];
