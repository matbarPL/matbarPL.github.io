import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { StoryFooter } from '../index';

const StyledStorySection = styled.section`
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
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const Story = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledStorySection id="story" ref={revealContainer}>
      <h2 className="numbered-heading">Story</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Mateusz is a professional with experience in management consulting, startups, and a
              Fortune 500 company. He excels at analyzing complex data, translating technical
              findings into actionable insights and presenting results effectively. Passionate about
              data science and machine learning, Mateusz is particularly interested in the
              intersection of business and technology. In his free time, he enjoys sports, cooking,
              and reading.
            </p>
          </div>
          <hr />
          <h3>Education</h3>
          <ul className="education-list">
            <li>
              <strong style={{ color: '#FFFFFF', fontWeight: 'bold' }}>University of Warsaw</strong>
              <br />
              MA, Data Science and Business Analytics
            </li>
            <br />
            <li>
              <strong style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                Wroclaw University of Science and Technology
              </strong>
              <br />
              BSc, Computer Science
            </li>
            <br />
            <li>
              <strong style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                Wroclaw University of Science and Technology
              </strong>
              <br />
              BSc, Applied Mathematics
            </li>
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="me"
            />
          </div>
          <StoryFooter />
        </StyledPic>
      </div>
    </StyledStorySection>
  );
};

export default Story;
