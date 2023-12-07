import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  headers: {
    xtoken: sessionStorage.getItem("xtoken"),
    "Content-Type": "Application/json",
  },
});
