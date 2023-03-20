import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  addComponent,
  getComponentById,
  getProjectComponent,
  updateComponent,
} from "../../../api/component/component";

export const useGetComponentByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(
    ["getComponent", project?.id],
    () => getProjectComponent(project?.id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export const useGetComponentById = (id) => {
  return useQuery(["ComponentById", id], () => getComponentById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddComponent = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["component"], (values) => addComponent(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getComponent"]);
      toast.success("Succesfully added Component");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateComponent = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateComponent"], (values) => updateComponent(values), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["ComponentById"]);
      toast.success("Succesfully updated Component");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
