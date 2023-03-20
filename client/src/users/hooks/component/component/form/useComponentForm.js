import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAddComponent } from "../../../api/component/useComponent";

export const useComponentForm = () => {
  const { mutate: mutateAdd } = useAddComponent({});
  const { project } = useSelector((state) => state.project);
  const { userId } = useSelector((state) => state.user);

  const handleAddComponent = (values) => {
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

    description: "",
    assignedTo: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string(),
    assignedTo: Yup.string(),
  });

  return {
    handleAddComponent,
    initialValues,
    validationSchema,
  };
};
