import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  addSubTask,
  getSubTaskById,
  getTaskSubTask,
  updateSubTask,
} from "../../../api/subTask/subTask";

export const useGetSubTaskByTaskId = (taskId) => {
  return useQuery(["getSubTask", taskId], () => getTaskSubTask(taskId), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetSubTaskById = (id) => {
  return useQuery(["subTaskById", id], () => getSubTaskById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddSubTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["subTask"], (values) => addSubTask(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getSubTask"]);
      toast.success("Succesfully added Sub-Task");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateSubTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateSubTask"], (values) => updateSubTask(values), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["getSubTask"]);
      queryClient?.invalidateQueries(["ComponentById"]);
      toast.success("Succesfully updated Sub-Task");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
