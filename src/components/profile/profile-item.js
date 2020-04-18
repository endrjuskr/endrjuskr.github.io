import React from "react";
import { rhythm } from "../../utils/typography"

const ProfileItem = ({ Icon, label }) => {
    return label && (
        <div>
            <Icon />
            <span style={{
                marginLeft: rhythm(1 / 2),
            }}>{label}</span>
        </div>
    );
}

export default ProfileItem;