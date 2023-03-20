import { axiosInstance } from "../../../app/api/axiosinstance";

export const getMembersByProjectId = async (id) => {
  const { data } = await axiosInstance.get(`/member/project/${id}`);
  return data;
};

export const getMemberById = async (id) => {
  const { data } = await axiosInstance.get(`/member/${id}`);
  return data;
};

export const addMember = async (values) => {
  const { data } = await axiosInstance.post(`/member`, values);
  return data;
};

export const deleteMember = async (id) => {
  const { data } = await axiosInstance.delete(`/member/${id}`);
  return data;
};
