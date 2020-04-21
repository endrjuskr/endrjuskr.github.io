import React from 'react';

const ProfileSocial = ({ Icon, link }) => (
  link && (
    <a href={link}>
      <Icon />
    </a>
  )
);

export default ProfileSocial;
