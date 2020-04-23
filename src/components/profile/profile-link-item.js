import React from 'react';
import { rhythm } from '../../utils/typography';

const ProfileLinkItem = ({ Icon, label, link }) => (link != null ? (
  <div>
    <Icon />
    <a
      style={{
        marginLeft: rhythm(1 / 2),
        color: 'white',
        fontWeight: 600,
      }}
      href={link}
    >
      {label}
    </a>
  </div>
) : null);

export default ProfileLinkItem;
