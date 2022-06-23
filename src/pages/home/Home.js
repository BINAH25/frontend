import React from "react";
import Profile from "../../component/profile/Profile";
import "./home.css";
import Post from "../../component/post/Post";
import RightSide from "../../component/rightSide/RightSide";
import TopBar from "../../component/topbar/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="container-fluid">
        <div className="row profile">
          <div className="col-lg-3 col-md-6">
            <RightSide />
          </div>
          <div className="col-lg-6 col-md-6">
            <Post />
          </div>
          <div className="col-lg-3 col-md-6 ">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
