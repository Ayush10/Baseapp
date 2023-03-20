import * as Yup from "yup";
import { useForgetPassword } from "../../../api/useAuth";

export const useForgetPasswordForm = () => {
  const { mutate: mutateForgetPassword } = useForgetPassword({});

  const handleForgetPassword = (username) => {
    mutateForgetPassword(username);
  };

  const initialValues = {
    username: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().email(),
  });

  return {
    handleForgetPassword,
    initialValues,
    validationSchema,
  };
};
