import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="expertise" ref={revealContainer}>
      <h2 className="numbered-heading">My expertise</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am your partner in harnessing the power of data. I believe that data is more than
              just numbers; it's a valuable resource that can drive meaningful impact. I am
              dedicated to helping you uncover hidden insights from your data and translate them
              into actionable strategies.
            </p>
            <p>
              I offer custom software solutions tailored to your specific data needs, data strategy
              development, and data processing expertise.
            </p>
          </div>
          <ul className="skills-list">
            <li>
              Custom software solutions for data analysis, visualization, and AI-powered tools.
            </li>
            <li>
              Data strategy development, technology identification, and data workflow optimization.
            </li>
            <li>
              Data processing expertise including cleaning, organizing, and extracting insights.
            </li>
            <li>
              Machine learning API integration for web portals to enhance user experiences and
              extract valuable data.
            </li>
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
