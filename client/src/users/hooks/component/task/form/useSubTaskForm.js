import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAddSubTask } from "../../../api/subTask/useSubTask";

export const useSubTaskForm = () => {
  const { mutate: mutateAdd } = useAddSubTask({});
  const { userId } = useSelector((state) => state.user);

  const handleAddTask = (values, TaskId) => {
    values = {
      ...values,
      TaskId: TaskId,
      status: "open",
      createdBy: userId,
    };
    console.log(values);
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
    handleAddTask,
    initialValues,
    validationSchema,
  };
};
