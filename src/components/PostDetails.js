import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/postdetails.css";
const PostDetails = () => {
  const data = useLocation();

  const post = data.state.post;
  return (
    <div className="postdetails">
      <Link to={"/"} className="goback">
        Go Back
      </Link>
      <div className="card">
        <h1>{post.title.toUpperCase()}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
