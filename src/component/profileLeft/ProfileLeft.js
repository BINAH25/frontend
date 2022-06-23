import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";
export default function ProfileLeft() {
  return (
    <div className="profile-side">
      <InfoCard />
      <FollowersCard />
    </div>
  );
}
