import axios from "axios";
import { BASE_URL } from '../shared/baseURL'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});

export const sendRequest = (config) => {
    return axiosInstance.request(config)
}

export const getRequest = (path) => {
    return sendRequest({
        url: path,
        method: 'GET'
    })
}

export const postRequest = (path, data) => {
    return sendRequest({
        url: path,
        method: 'POST',
        body: JSON.stringify(data)
    })
}