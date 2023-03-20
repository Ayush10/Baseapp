import { axiosInstance } from "../../app/api/axiosinstance";

//returns promise data from backend
export const postLogin = async (values) => {
  const { data } = await axiosInstance.post(`/user/login`, values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axiosInstance.post(`/user/register`, values);
  return data;
};

export const forgetPassword = async (username) => {
  const { data } = await axiosInstance.post(`/user/forgotPassword/${username}`);
  return data;
};

//pass values as JSON data. It is de-structured in the backend
export const resetPassword = async (values) => {
  const { data } = await axiosInstance.put(
    `/user/resetPassword/${values?.id}`,
    values
  );
  return data;
};
