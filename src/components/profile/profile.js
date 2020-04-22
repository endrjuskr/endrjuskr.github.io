/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProfileContainer from './profile-container';

const Profile = ({ isLarge }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            website
            location
            employer
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <ProfileContainer isLarge={isLarge} author={author} social={social} avatar={data.avatar} />
  );
};

export default Profile;
