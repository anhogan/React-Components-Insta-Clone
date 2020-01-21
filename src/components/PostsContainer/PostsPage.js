import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.post.map((post) => <Post post={post} />)}
    </div>
  );
};

export default PostsPage;

