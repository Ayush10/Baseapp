import { axiosInstance } from "../../../app/api/axiosinstance";

export const getProjectComponent = async (projectId) => {
  const { data } = await axiosInstance.get(`/component/project/${projectId}`);
  return data;
};

export const getComponentById = async (id) => {
  const { data } = await axiosInstance.get(`/component/${id}`);
  return data;
};

export const addComponent = async (values) => {
  const { data } = await axiosInstance.post(`/component`, values);
  return data;
};

export const updateComponent = async (values) => {
  const { data } = await axiosInstance.put(`/component`, values);
  return data;
};
