import React from "react";
import "./side.css";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../../actions/AuthActions";
import { useDispatch } from "react-redux";

import {
  RssFeed,
  Chat,
  HelpOutline,
  WorkOutline,
  Event,
  Group,
  PlayArrowOutlined,
} from "@material-ui/icons";

export default function Side() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayArrowOutlined className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Video</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="sidebar-icon" />
            <span className="sidebar-list-item-tex">Event</span>
          </li>
          <li className="sidebar-list-item">
            <FiLogOut className="sidebar-icon" style={{ color: "red" }} />
            <span
              className="sidebar-list-item-tex"
              onClick={handleLogOut}
              style={{ color: "red" }}
            >
              Logout
            </span>
          </li>
        </ul>

        <hr className="sidebar-hr" />
      </div>
    </div>
  );
}
