import axios from "@/config/endPoint";

const Film = (data: any) => {
  return axios.post(
    "discover/movie?page=1&api_key=194ce4da0cfba52c1bdb1078179b6d85",
    data
  );
};

export default {
  Film,
};
