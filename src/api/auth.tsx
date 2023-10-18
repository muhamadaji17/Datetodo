import axios from "@/config/endPoint";

const Login = () => {
  return axios.post("/Auth/Login");
};

export default {
  Login,
};
