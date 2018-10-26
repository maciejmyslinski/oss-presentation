import system from 'system-components';

export const Hero = system({
  width: 1,
  height: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

Hero.defaultProps.children = 'Page Title';
