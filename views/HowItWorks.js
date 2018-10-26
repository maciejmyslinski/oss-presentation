import React from 'react';
import { Section as SmartSection, SectionSpy } from 'react-smart-sections';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Section } from '../components/Section';
import { FullScreen } from '../components/FullScreen';
import { FixedPositioning } from '../components/FixedPositioning';
import { sections } from './sections';

export const HowItWorks = () => (
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
        <SmartSection key={i} name={String(i)}>
          <SectionSpy
            name={String(i)}
            render={({ active }) =>
              console.log(active) || (
                <Section type={section} active={active}>
                  {section}
                </Section>
              )
            }
          />
        </SmartSection>
      ))}
    </FullScreen>
  </FixedPositioning>
);
