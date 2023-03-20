import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  addProject,
  getProjectById,
  getUserProjects,
  updateProject,
} from "../../../api/projects/projects";
import { useSelector } from "react-redux";

export const useGetUserProjects = () => {
  const { userId } = useSelector((state) => state.user);
  return useQuery(["userProject", userId], () => getUserProjects(userId), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetProjectById = (id) => {
  return useQuery(["Project", id], () => getProjectById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddProject = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["register"], (values) => addProject(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["userProject"]);
      toast.success("Succesfully Created a project");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateProject = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateProject"], (values) => updateProject(values), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["Project"]);
      toast.success("Succesfully updated Project");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
