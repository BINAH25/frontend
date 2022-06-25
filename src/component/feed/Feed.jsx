import React, { useEffect } from "react";
import FeedShare from "../feedShare/FeedShare";
import "./feed.css";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostActions";
import { useParams } from "react-router-dom";

export default function Feed() {
  const dispatch = useDispatch();
  const params = useParams();

  const { user } = useSelector((state) => state.AuthReducer.authData);
  let { posts } = useSelector((state) => state.PostReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className="feed">
      {posts.map((feed, id) => {
        return <FeedShare data={feed} key={id} />;
      })}
      
    </div>
  );
}
