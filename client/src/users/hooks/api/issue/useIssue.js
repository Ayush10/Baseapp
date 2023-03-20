import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  addIssue,
  deleteIssue,
  getIssueById,
  getProjectIssue,
  updateIssue,
} from "../../../api/issue/issue";

export const useGetIssueByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(
    ["getIssue", project?.id],
    () => getProjectIssue(project?.id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export const useGetIssueById = (id) => {
  return useQuery(["issueById", id], () => getIssueById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddIssue = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["issue"], (values) => addIssue(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getIssue"]);
      toast.success("Succesfully added Issue");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useUpdateIssue = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateIssue"], (values) => updateIssue(values), {
    onSuccess: (data, variables, context) => {
      queryClient?.invalidateQueries(["getIssue"]);
      queryClient?.invalidateQueries(["ComponentById"]);
      toast.success("Succesfully updated Issue");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useDeleteIssue = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["issue"], (id) => deleteIssue(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getIssue"]);
      toast.success("Succesfully deleted Issue");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
