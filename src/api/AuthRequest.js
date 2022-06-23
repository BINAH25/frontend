import axios from "axios";
export const API = axios.create({
  baseURL: "https://swift-a.herokuapp.com/",
});
export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
