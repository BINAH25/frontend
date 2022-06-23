import React from "react";
import "./post.css";
import Share from "../share/Share";
import Feed from "../feed/Feed";

export default function Post() {
  return (
    <div className="post">
      <Share />
      <Feed />
    </div>
  );
}
