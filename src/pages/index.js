import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostHeader from '../components/post/post-header';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title="">
      <SEO title="All posts" />
      <div>
        {posts.map(PostHeader)}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
