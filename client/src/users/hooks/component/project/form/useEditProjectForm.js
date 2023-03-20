import * as Yup from "yup";
import { useUpdateProject } from "../../../api/projects/useProjects";

const useEditProjectForm = (data) => {
  const { mutate: mutateEdit } = useUpdateProject({});

  const handleEdit = (values, id) => {
    values = {
      ...values,
      id: id,
    };
    mutateEdit(values);
  };

  const initialValues = {
    name: data?.name,
    type: data?.type,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    type: Yup.string().required(),
  });

  return {
    handleEdit,
    initialValues,
    validationSchema,
  };
};

export default useEditProjectForm;
