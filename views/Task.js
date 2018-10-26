import React from 'react';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Section } from '../components/Section';
import { FullScreen } from '../components/FullScreen';
import { FixedPositioning } from '../components/FixedPositioning';
import { sections } from './sections';

export const Task = () => (
  <FixedPositioning>
    <FullScreen>
      <Hero />
      <Menu>
        <ul>
          {sections.map((section, i) => (
            <Menu.Element key={i}>{section}</Menu.Element>
          ))}
        </ul>
      </Menu>
      {sections.map((section, i) => (
        <Section key={i} type={section}>
          {section}
        </Section>
      ))}
    </FullScreen>
  </FixedPositioning>
);
