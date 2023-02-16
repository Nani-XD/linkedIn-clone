import { Avatar } from "@mui/material";
import React from "react";

import { InputOption } from "../Feed";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

import "./style.css";

function Post({ name, title, description, message }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />

        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
