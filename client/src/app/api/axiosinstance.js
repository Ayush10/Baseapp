import axios from "axios";
import { getCookie } from "../utils/cookies";

//Change base url for api call when changing server for backend
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(function (config) {
  const data = getCookie("Auth");
  const token = data?.token; //token set in headers for letting system verify if user is authorized
  if (token) {
    config.headers["Authorization"] = token; //setting token on headers
  }
  return config;
});

axiosInstance.interceptors.response.use(
  //returns promise data which is passed when an api is called
  function (response) {
    return response.data;
  },

  //returns promise data when an error occurs in the api used in react-query mutation.
  function (error) {
    if (error.response && error.response.data) {
      if (error.response.data.message) {
        const message = error.response.data.message;
        return Promise.reject({ message });
      } else return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        message: "The server is currently not working.", //server failure message
      });
    }
  }
);
