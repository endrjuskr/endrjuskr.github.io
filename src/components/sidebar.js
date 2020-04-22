import React from 'react';
import Profile from './profile/profile';
import { rhythm } from '../utils/typography';

const Sidebar = ({ isRoot, isLarge }) => isRoot && (
<div style={{
  position: isLarge ? 'fixed' : 'unset',
  minWidth: rhythm(15),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
>
  <Profile isLarge={isLarge} />
</div>
);

export default Sidebar;
