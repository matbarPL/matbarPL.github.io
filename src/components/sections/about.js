import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledIndustries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;

    li {
      margin-bottom: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      position: relative;

      &:before {
        content: '▹';
        position: absolute;
        left: -15px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
  }
`;

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
              I am your partner in harnessing the power of data. By treating data as a valuable
              resource rather than just numbers, opportunities are unlocked to make informed
              decisions and achieve strategic goals.
            </p>
          </div>
          <ul className="skills-list">
            <li>
              Custom software solutions for data analysis, visualization and AI-powered tools.
            </li>
            <li>
              Data strategy development, technology identification and data workflow optimization.
            </li>
            <li>
              Data processing expertise including cleaning, organizing and extracting insights.
            </li>
            <li>
              Machine learning API integration for web portals to enhance user experiences and
              extract valuable data.
            </li>
          </ul>
        </StyledText>
        <StyledIndustries>
          <h3>Industries</h3>
          <ul>
            <li>FMCG</li>
            <li>Media</li>
            <li>E-commerce</li>
            <li>Manufacturing</li>
            <li>Construction</li>
          </ul>
          <h3>Geographies</h3>
          <ul>
            <li>USA</li>
            <li>UK</li>
            <li>France</li>
            <li>Poland</li>
          </ul>
        </StyledIndustries>
      </div>
    </StyledAboutSection>
  );
};

export default About;
