import { Avatar } from "@mui/material";
import React from "react";
import "./style.css";

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1221&q=80" />
        <Avatar src="https://yt3.ggpht.com/e7xYQVTg3-1wKvb6ic7K2Gln5p2ubJWyCC314M7jnK8V8-GX12UzfPjWTBDVxzCm3uOrtWYNWWM=s88-c-k-c0x00ffffff-no-rj-mo" />
        <h2>Nani XD</h2>
        <h4>0.01me@instagram.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNo">2049</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNo">2599</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  );
}
