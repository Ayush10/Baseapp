import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAddMember } from "../../../api/member/useMember";

export const useMemberForm = () => {
  const { mutate: mutateAdd } = useAddMember({});
  const { project } = useSelector((state) => state.project);

  const handleAddMember = (values) => {
    values = {
      ...values,
      projectId: project?.id,
    };
    mutateAdd(values);
  };

  const initialValues = {
    username: "",
    type: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    type: Yup.string().required(),
  });

  return {
    handleAddMember,
    initialValues,
    validationSchema,
  };
};
