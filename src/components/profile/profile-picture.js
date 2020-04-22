import React from 'react';
import Image from 'gatsby-image';

import { rhythm } from '../../utils/typography';

const ProfilePicture = ({ avatar, author }) => (
  <div style={{
    borderRadius: '10px',
    background: 'white',
    height: '150px',
    marginLeft: rhythm(1 / 2),
    marginRight: rhythm(1 / 2),
  }}
  >
    <Image
      fixed={avatar.childImageSharp.fixed}
      alt={author.name}
      style={{
        marginBottom: rhythm(1 / 2),
        minWidth: 150,
        borderRadius: '100%',
      }}
      imgStyle={{
        borderRadius: '5px',
      }}
    />
  </div>
);

export default ProfilePicture;
