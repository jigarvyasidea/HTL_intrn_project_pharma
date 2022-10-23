import React from 'react';
import { ScrollingProvider, SectionLink, Section} from 'react-scroll-section';

const Scroll = () => (

   
    <ScrollingProvider>
      <div>
        <SectionLink section="home">
          {({ onClick, isSelected }) => (
            <div onClick={onClick} selected={isSelected}>
              Home
            </div>
          )}
        </SectionLink>
        <SectionLink section="about">
          {({ onClick, isSelected }) => (
            <div onClick={onClick} selected={isSelected}>
              About
            </div>
          )}
        </SectionLink>
      </div>
        <Section id="home">
          Home section
        </Section>
        <Section id="about">
            About section
        </Section>
    </ScrollingProvider>
);

export default Scroll;