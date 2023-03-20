import { axiosInstance } from "../../../app/api/axiosinstance";

export const getProjectTask = async (projectId) => {
  const { data } = await axiosInstance.get(`/task/project/${projectId}`);
  return data;
};

export const getTaskById = async (id) => {
  const { data } = await axiosInstance.get(`/task/${id}`);
  return data;
};

export const addTask = async (values) => {
  const { data } = await axiosInstance.post(`/task`, values);
  return data;
};

export const updateTask = async (values) => {
  const { data } = await axiosInstance.put(`/task`, values);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await axiosInstance.delete(`/task/${id}`);
  return data;
};
