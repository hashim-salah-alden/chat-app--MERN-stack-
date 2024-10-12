import axios from "axios";

const API = axios.create({
  baseURL: "https://chat-app-mern-stack-2v3d.onrender.com",
  withCredentials: true
});

export default API;
