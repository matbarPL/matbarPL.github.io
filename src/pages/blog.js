import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledContent = styled.div`
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 50px 0;
  }
`;

const BlogPost = styled.article`
  margin-bottom: 50px;

  h2 {
    font-size: var(--fz-xl);
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 10px;
  }

  p {
    font-size: var(--fz-lg);
    line-height: 1.5;
    margin-bottom: 15px;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  .post-details {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
      font-size: var(--fz-sm);
      color: var(--gray);
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const BlogPage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealContent = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealContent.current, srConfig(200));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Blog" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Blog</h1>
          <p className="subtitle">A collection of my thoughts and articles</p>
        </header>

        <StyledContent ref={revealContent}>
          {projects.length > 0 &&
            projects.map(({ node }, i) => (
              <BlogPost key={i}>
                <h2>{node.frontmatter.title}</h2>
                <div className="post-details">
                  <span>{new Date(node.frontmatter.date).toLocaleDateString()}</span>
                  {/* Add author information if needed */}
                </div>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
                {/* Add links section if needed */}
              </BlogPost>
            ))}
        </StyledContent>
      </main>
    </Layout>
  );
};

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`;