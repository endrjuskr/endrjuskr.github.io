import React from 'react';
import {
  FaLink, FaMapMarkerAlt, FaUserTie, FaLinkedinIn, FaGithub, FaTwitter,
} from 'react-icons/fa';

import ProfileItem from './profile-item';
import ProfileLinkItem from './profile-link-item';
import ProfilePicture from './profile-picture';
import ProfileSocial from './profile-social';

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
    <div>
      <ProfileSocial Icon={FaLinkedinIn} link={author.social.linkedin} />
      <ProfileSocial Icon={FaTwitter} link={author.social.twitter} />
      <ProfileSocial Icon={FaGithub} link={author.social.github} />
    </div>

  </div>
);

export default ProfileContainer;
