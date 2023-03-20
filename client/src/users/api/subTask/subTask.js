import { axiosInstance } from "../../../app/api/axiosinstance";

export const getTaskSubTask = async (taskId) => {
  const { data } = await axiosInstance.get(`/subTask/task/${taskId}`);
  return data;
};

export const getSubTaskById = async (id) => {
  const { data } = await axiosInstance.get(`/subTask/${id}`);
  return data;
};

export const addSubTask = async (values) => {
  const { data } = await axiosInstance.post(`/subTask`, values);
  return data;
};

export const updateSubTask = async (values) => {
  const { data } = await axiosInstance.put(`/subTask`, values);
  return data;
};
