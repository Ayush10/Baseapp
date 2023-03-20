import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAddIssue } from "../../../api/issue/useIssue";

export const useIssueForm = () => {
  const { mutate: mutateAdd } = useAddIssue({});
  const { project } = useSelector((state) => state.project);
  const { userId } = useSelector((state) => state.user);

  const handleAddIssue = (values) => {
    values = {
      ...values,
      ProjectId: project?.id,
      status: "open",
      createdBy: userId,
    };
    mutateAdd(values);
  };

  const initialValues = {
    name: "",
    type: "",
    description: "",
    assignedTo: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    type: Yup.string().required(),
    description: Yup.string(),
    assignedTo: Yup.string(),
  });

  return {
    handleAddIssue,
    initialValues,
    validationSchema,
  };
};
