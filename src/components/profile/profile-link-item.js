import React from 'react';
import { rhythm } from '../../utils/typography';

const ProfileLinkItem = ({ Icon, label }) => label && (
<div>
  <Icon />
  <a
    style={{
      marginLeft: rhythm(1 / 2),
      color: 'white',
      fontWeight: 600,
    }}
    href={label}
  >
    {label}
  </a>
</div>
);

export default ProfileLinkItem;
