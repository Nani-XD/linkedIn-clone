import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./style.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="header-options">
      {Icon && <Icon className="header-icon" />}
      {avatar && <Avatar className="header-icon" src={avatar} />}
      <h1>{title}</h1>
    </div>
  );
}

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png"
          className="app-logo"
          alt="app-logo"
        />

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          avatar="https://yt3.ggpht.com/e7xYQVTg3-1wKvb6ic7K2Gln5p2ubJWyCC314M7jnK8V8-GX12UzfPjWTBDVxzCm3uOrtWYNWWM=s88-c-k-c0x00ffffff-no-rj-mo"
          title="Me"
        />
      </div>
    </div>
  );
}
