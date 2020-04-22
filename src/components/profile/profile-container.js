import React from 'react';
import {
  FaMapMarkerAlt, FaUserTie, FaLinkedinIn, FaGithub, FaTwitter, FaGlobe,
} from 'react-icons/fa';

import ProfileItem from './profile-item';
import ProfileLinkItem from './profile-link-item';
import ProfilePicture from './profile-picture';
import ProfileSocial from './profile-social';

const ProfileContainer = ({ avatar, author, social }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    <ProfilePicture avatar={avatar} author={author} />
    <div>
      <ProfileLinkItem Icon={FaGlobe} link={author.website} />
      <ProfileItem Icon={FaMapMarkerAlt} label={author.location} />
      <ProfileItem Icon={FaUserTie} label={author.employer} />
    </div>
    <div style={{
      width: '100%',
      textAlign: 'center',
    }}
    >
      <ProfileSocial Icon={FaLinkedinIn} link={social.linkedin} />
      <ProfileSocial Icon={FaTwitter} link={social.twitter} />
      <ProfileSocial Icon={FaGithub} link={social.github} />
    </div>

  </div>
);

export default ProfileContainer;
