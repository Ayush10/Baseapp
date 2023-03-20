import { axiosInstance } from "../../../app/api/axiosinstance";

export const getProjectTask = async (projectId) => {
  const { data } = await axiosInstance.get(`/task/project/${projectId}`);
  return data;
};

export const updateProjectTask = async (values) => {
  const { data } = await axiosInstance.put("/task", values);
  return data;
};
