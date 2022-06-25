import React from "react";
import "./profileCard.css";
import { useSelector } from "react-redux";

export default function ProfileCard() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const posts = useSelector((state) => state.PostReducer.posts);
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="profile-img">
        <img
          src={user.coverPicture ? PF + user.coverPicture : PF + "noCover.png"}
          alt=""
        />
        <img
          src={
            user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>

        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}{" "}
    </div>
  );
}
