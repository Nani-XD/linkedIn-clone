import React, { useState, useEffect } from "react";

import { db } from "../../firebase";

import {
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import Post from "../Post";

import CreateIcon from "@mui/icons-material/Create";
import { Image } from "@mui/icons-material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";

import "./style.css";
import { async } from "@firebase/util";

export function InputOption({ Icon, title, color }) {
  return (
    <div className="input-options">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // Collection Ref
  const postCollectionRef = collection(db, "posts");

  // Querys
  const q = query(postCollectionRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    try {
      const getPosts = onSnapshot(q, (snapshot) => {
        let postList = [];
        snapshot.docs.map((doc) => {
          postList.push({ ...doc.data(), id: doc.id });
        });
        setPosts(postList);
        setInput("");
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    try {
      addDoc(collection(db, "posts"), {
        name: "Nani-XD",
        description: "This is a test",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideoCallIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={ArticleIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
    </div>
  );
}
