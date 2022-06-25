import React, { useState } from "react";
import "./rightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ShareModal from "../shareModal/ShareModal";
import TrendCard from "../trendCard/TrendCard";

export default function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}
