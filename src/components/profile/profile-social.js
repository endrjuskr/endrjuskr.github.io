import React from 'react';

const ProfileSocial = ({ Icon, link }) => (
  link && (
    <a
      style={{
        color: 'white',
        fontWeight: 600,
        margin: '5px',
      }}
      href={link}
    >
      <Icon />
    </a>
  )
);

export default ProfileSocial;
