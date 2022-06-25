import React from "react";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useSelector } from "react-redux";

export default function TopBar() {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Swift Media</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="search for post"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <span className="topbar-link">Home</span>
          </Link>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user._id}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvatar.png"
            }
            alt=""
            className="topbar-img"
          />
        </Link>
      </div>
    </div>
  );
}
