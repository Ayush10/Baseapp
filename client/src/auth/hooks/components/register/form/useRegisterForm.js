import { useRegister } from "../../../api/useAuth";
import * as Yup from "yup";

export const useRegisterForm = () => {
  const { mutate: mutateRegister } = useRegister({});

  const handleRegister = (values) => {
    mutateRegister(values);
  };

  const initialValues = {
    name: "",
    username: "",
    phoneNumber: "",
    address: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    username: Yup.string().required().email(),
    phoneNumber: Yup.number().positive(),
    address: Yup.string().required(),
    password: Yup.string().required(),
  });

  return {
    handleRegister,
    initialValues,
    validationSchema,
  };
};
