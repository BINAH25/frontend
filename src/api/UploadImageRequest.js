import axios from "axios";
export const API = axios.create({
  baseURL: "https://swift-a.herokuapp.com/",
});
export const UploadImage = (data) => API.post("/upload/", data);
export const UploadPost = (data) => API.post("/post", data);
