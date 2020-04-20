import React from 'react';
import { rhythm } from '../../utils/typography';

const ProfileItem = ({ Icon, label }) => label && (
<div>
  <Icon />
  <span style={{
    marginLeft: rhythm(1 / 2),
    color: 'white',
    fontWeight: 600,
  }}
  >
    {label}
  </span>
</div>
);

export default ProfileItem;
