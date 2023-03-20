import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProjectTask, updateProjectTask } from "../../../api/kanban/kanban";

export const useGetTaskByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(["getTask", project?.id], () => getProjectTask(project?.id), {
    cacheTime: 0,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useUpdateProjectTask = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateProjectTask"],
    (values) => updateProjectTask(values),
    {
      onSuccess: (data, variables, context) => {
        queryClient?.invalidateQueries(["getTask"]);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
