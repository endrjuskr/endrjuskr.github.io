import React from "react";
import Profile from "./profile/profile";
import { rhythm } from "../utils/typography"

const Sidebar = ({ isRoot }) => {
    return (
        <div style={{
            position: `fixed`,
            width: rhythm(15),
            height: `100%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`
        }}>
        { isRoot && <Profile />}
        </div>
    );
}

export default Sidebar;