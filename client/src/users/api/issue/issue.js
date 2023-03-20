import { axiosInstance } from "../../../app/api/axiosinstance";

export const getProjectIssue = async (projectId) => {
  const { data } = await axiosInstance.get(`/issue/project/${projectId}`);
  return data;
};

export const getIssueById = async (id) => {
  const { data } = await axiosInstance.get(`/issue/${id}`);
  return data;
};

export const addIssue = async (values) => {
  const { data } = await axiosInstance.post(`/issue`, values);
  return data;
};

export const updateIssue = async (values) => {
  console.log(values);
  const { data } = await axiosInstance.put(`/issue`, values);
  return data;
};

export const deleteIssue = async (id) => {
  const { data } = await axiosInstance.delete(`/issue/${id}`);
  return data;
};
