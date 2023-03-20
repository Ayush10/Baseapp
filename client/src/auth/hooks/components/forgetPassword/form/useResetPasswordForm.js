import * as Yup from "yup";
import { useResetPassword } from "../../../api/useAuth";

export const useResetPasswordForm = () => {
  const { mutate: mutateResetPassword } = useResetPassword({});

  const handleResetPassword = (values, id) => {
    values = {
      ...values,
      id: Number(id),
    };
    mutateResetPassword(values);
  };

  const initialValues = {
    password: "",
    conformPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required(),
    conformPassword: Yup.string()
      .required("Enter your password again !")
      .oneOf([Yup.ref("password"), null], "Password did not match!"),
  });

  return {
    handleResetPassword,
    initialValues,
    validationSchema,
  };
};
