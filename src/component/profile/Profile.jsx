import React from "react";
import Side from "../side/Side";
import "./profile.css";
import FollowersCard from "../followersCard/FollowersCard";
export default function Profile() {
  return (
    <div className="profile-side">
      <Side />
      <FollowersCard />
    </div>
  );
}
