import axios from "axios";


axios.defaults.withCredentials = true;

const url = process.env.REACT_APP_URL_BACKEND;

const api = axios.create({
    baseURL: `${url}`,
});

export default api;
