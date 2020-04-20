import React from 'react';
import { FaLink, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

import ProfileItem from './profile-item';
import ProfileLinkItem from './profile-link-item';
import ProfilePicture from './profile-picture';

const ProfileContainer = ({ avatar, author }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    <ProfilePicture avatar={avatar} author={author} />
    <div>
      <ProfileLinkItem Icon={FaLink} label="https://github.io" />
      <ProfileItem Icon={FaMapMarkerAlt} label={author.location} />
      <ProfileItem Icon={FaUserTie} label={author.employer} />
    </div>

  </div>
);

export default ProfileContainer;
