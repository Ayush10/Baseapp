import { useLogIn } from "../../../api/useAuth";
import * as Yup from "yup";

export const useLoginForm = () => {
  const { mutate: mutateLogin } = useLogIn({});

  const handleLogin = (values) => {
    mutateLogin(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return {
    handleLogin,
    initialValues,
    validationSchema,
  };
};
