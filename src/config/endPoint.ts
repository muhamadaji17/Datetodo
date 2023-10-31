import axios from "axios";

export default axios.create({
    baseURL: process.env.endPoint,
    headers: {
        xtoken : sessionStorage.getItem('xtoken')
    }
})