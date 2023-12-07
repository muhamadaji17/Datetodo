import axios from "@/config/endPoint";

const getDate = () => {
  return axios.get(`/api/trx/user/profile`, {
    headers: {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "image/jpeg",
    },
  });
};

export default getDate;
