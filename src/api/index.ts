import axios from "@/config/endPoint"

const getDate =  () => {
    return axios.get(`/`)
}

export default {getDate}