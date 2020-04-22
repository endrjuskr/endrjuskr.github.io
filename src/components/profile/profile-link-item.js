import React from 'react';
import { rhythm } from '../../utils/typography';

const ProfileLinkItem = ({ Icon, link }) => (link != null ? (
  <div>
    <Icon />
    <a
      style={{
        marginLeft: rhythm(1 / 2),
        color: 'white',
        fontWeight: 600,
      }}
      href={`https://${link}`}
    >
      {link}
    </a>
  </div>
) : null);

export default ProfileLinkItem;
