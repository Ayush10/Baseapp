import { axiosInstance } from "../../../app/api/axiosinstance";
import { setCookie } from "../../../app/utils/cookies";

export const getUserProjects = async (userId) => {
  const { data } = await axiosInstance.get(`/project/user/${userId}`);
  return data;
};

export const getProjectById = async (id) => {
  const { data } = await axiosInstance.get(`/project/${id}`);
  setCookie("proj", data);
  return data;
};

export const addProject = async (values) => {
  const { data } = await axiosInstance.post(`/project`, values);
  return data;
};

export const updateProject = async (values) => {
  const { data } = await axiosInstance.put(`/project`, values);
  return data;
};
