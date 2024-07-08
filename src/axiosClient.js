import axios from "axios";

const API = 'https://themealdb.com/api/json/v1/1/';

const axiosClient = axios.create({
  baseURL: API,
});

export default axiosClient;
