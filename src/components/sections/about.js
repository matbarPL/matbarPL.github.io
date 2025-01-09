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
              decisions and achieve strategic goals. My strong mathematical foundation, and
              experience across diverse industries, functions and geographies enable me to deliver
              unique, high-impact data solutions.
            </p>
          </div>
          <ul className="skills-list">
            <li>
              Designing and implementing efficient ETL pipelines, feature engineering processes and
              automated monitoring systems to ensure data quality and reproducibility.
            </li>
            <li>
              Driving end-to-end impact by aligning business goals with technical solutions,
              delivering actionable insights and ensuring successful deployment of data products.
            </li>
            <li>
              Leveraging cross-industry and international experience to develop adaptable,
              high-impact data solutions.
            </li>
            <li>
              Enhancing model performance using advanced techniques such as grid search, Bayesian
              optimization and domain-specific feature extraction.
            </li>
            <li>
              Effectively communicating complex ML models and algorithms through presentations
              tailored to the audience.
            </li>
            <li>
              Building scalable machine learning models to solve real-world business problems.
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
            <li>South Africa</li>
          </ul>
          <h3>Functions</h3>
          <ul>
            <li>IT</li>
            <li>BI</li>
            <li>Finance</li>
            <li>Operations</li>
          </ul>
        </StyledIndustries>
      </div>
    </StyledAboutSection>
  );
};

export default About;
