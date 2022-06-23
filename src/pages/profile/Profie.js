import React from "react";
import "./profile.css";
import ProfileLeft from "../../component/profileLeft/ProfileLeft";
import Post from "../../component/post/Post";
import RightSide from "../../component/rightSide/RightSide";
import ProfileCard from "../../component/profileCard/ProfileCard";
import TopBar from "../../component/topbar/TopBar";
export default function Profie() {
  return (
    <div className="container-fluid p-0">
      <TopBar />
      <div className="row profile">
        <div className="col-lg-3 col-md-6">
          <ProfileLeft />
        </div>
        <div className="col-lg-6 col-md-6">
          <ProfileCard />
          <Post />
        </div>
        <div className="col-lg-3 col-md-6">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
