import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAddProject } from "../../../api/projects/useProjects";

export const useProjectForm = () => {
  const { mutate: mutateAdd } = useAddProject({});
  const { userId } = useSelector((state) => state.user);

  const handleAddProject = (values) => {
    values = {
      ...values,
      numberOfMembers: 1,
      UserId: userId,
    };
    mutateAdd(values);
  };

  const initialValues = {
    name: "",
    type: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    type: Yup.string().required(),
  });

  return {
    handleAddProject,
    initialValues,
    validationSchema,
  };
};
