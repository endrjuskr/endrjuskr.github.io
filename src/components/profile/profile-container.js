import React from 'react';
import {
  FaMapMarkerAlt, FaUserTie, FaLinkedinIn, FaGithub, FaTwitter, FaGlobe,
} from 'react-icons/fa';

import ProfileItem from './profile-item';
import ProfileLinkItem from './profile-link-item';
import ProfilePicture from './profile-picture';
import ProfileSocial from './profile-social';

import { rhythm } from '../../utils/typography';

const ProfileContainer = ({ avatar, author, social, isLarge }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isLarge ? 'column' : 'row',
        alignItems: 'flex-start',
      }}
    >
      <ProfilePicture avatar={avatar} author={author} />
      <div style={{
        marginLeft: rhythm(1 / 2),
        marginRight: rhythm(1 / 2),
      }}
      >
        <div style={{
          marginTop: rhythm(1 / 2),
        }}
        >
          <ProfileLinkItem Icon={FaGlobe} link={author.website} />
          <ProfileItem Icon={FaMapMarkerAlt} label={author.location} />
          <ProfileItem Icon={FaUserTie} label={author.employer} />
        </div>
        <div style={{
          width: '100%',
          textAlign: 'center',
          marginTop: rhythm(1),
        }}
        >
          <ProfileSocial Icon={FaLinkedinIn} link={social.linkedin} />
          <ProfileSocial Icon={FaTwitter} link={social.twitter} />
          <ProfileSocial Icon={FaGithub} link={social.github} />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
