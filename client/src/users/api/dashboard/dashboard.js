import { axiosInstance } from "../../../app/api/axiosinstance";

export const getDashboard = async (ProjectId) => {
  const { data } = await axiosInstance.get(`/dashboard/${ProjectId}`);
  return data;
};
