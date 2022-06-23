import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:5000",
});
export const UploadImage = (data) => API.post("/upload/", data);
export const UploadPost = (data) => API.post("/post", data);
