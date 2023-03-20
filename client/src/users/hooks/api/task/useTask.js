import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  getProjectTask,
  getTaskById,
  updateTask,
} from "../../../api/task/task";

export const useGetTaskByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(["getTask", project?.id], () => getProjectTask(project?.id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetTaskById = (id) => {
  return useQuery(["taskById", id], () => getTaskById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["task"], (values) => addTask(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getTask"]);
      toast.success("Succesfully added Task");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateTask"], (values) => updateTask(values), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["getTask"]);
      queryClient?.invalidateQueries(["ComponentById"]);
      toast.success("Succesfully updated Task");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["task"], (id) => deleteTask(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getTask"]);
      toast.success("Succesfully deleted Task");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
