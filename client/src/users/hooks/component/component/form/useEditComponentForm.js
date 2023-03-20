import * as Yup from "yup";
import { useUpdateComponent } from "../../../api/component/useComponent";

export const useEditComponentForm = (data) => {
  const { mutate: mutateEdit } = useUpdateComponent({});

  const handleEdit = (values) => {
    values = { ...values, id: data?.id };
    mutateEdit(values);
  };

  const initialValues = {
    name: data?.name,
    description: data?.description,
    assignedTo: data?.assignedTo,
    status: data?.status,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string(),
    assignedTo: Yup.string(),
    status: Yup.string(),
  });

  return {
    handleEdit,
    initialValues,
    validationSchema,
  };
};
