import axios from "@/config/endPoint"

const Login = (data:any) => {
    return axios.post('login', data)
}

export default {
    Login
}