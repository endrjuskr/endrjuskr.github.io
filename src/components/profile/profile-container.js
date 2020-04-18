import React from "react";
import Image from "gatsby-image"
import { FaLink, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

import { rhythm } from "../../utils/typography"
import ProfileItem from "./profile-item";
import ProfileLinkItem from "./profile-link-item";

const ProfileContainer = ({ avatar, author, social }) => (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: 'flex-start',
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: rhythm(1 / 2),
          minWidth: 150,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `5px`,
        }}
      />
      <div>
          <ProfileLinkItem Icon={FaLink} label="https://github.io" />
          <ProfileItem Icon={FaMapMarkerAlt} label={author.location} /> 
          <ProfileItem Icon={FaUserTie} label={author.employer} /> 
      </div>
      
    </div>
)

export default ProfileContainer;
