import axios from "axios";

export const API = axios.create({
  baseURL: "https://swift-a.herokuapp.com/",
});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });
