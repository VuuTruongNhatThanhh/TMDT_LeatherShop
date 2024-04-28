// Chức năng của những file này là tạo ra những function để call api
import axios from "axios";
import API_URL_BACK_END from "../apiConfig";
export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${API_URL_BACK_END}/user/sign-in`,data)
    return res.data
}

export const signupUser = async (data) => {
    const res = await axios.post(`${API_URL_BACK_END}/user/sign-up`,data)
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(`${API_URL_BACK_END}/user/get-details/${id}`,{
        headers: {
            token:`Bearer ${access_token}`, 
        }
    })
    return res.data
}

export const refreshToken = async () => {
    const res = await axios.post(`${API_URL_BACK_END}/user/refresh-token`, {
        // Khi mà có cookie thì sẽ tự động lấy cookie
        // Phải đổi port back end thành 3000 để lấy được cookie ở front end, trong proxy package.json vẫn để 3001
        withCredentials: true
    })
    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`${API_URL_BACK_END}/user/log-out`)
    return res.data
}