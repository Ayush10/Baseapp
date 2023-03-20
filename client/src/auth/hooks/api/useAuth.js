import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import {
  forgetPassword,
  postLogin,
  registerUser,
  resetPassword,
} from "../../api/authentication";
import { setCookie } from "../../../app/utils/cookies";
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/slice/userSlice";

export const useLogIn = ({ onSuccess }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return useMutation(["login"], (values) => postLogin(values), {
    onSuccess: (data, variables, context) => {
      setCookie("Auth", data);
      history.push("/projects");
      dispatch(setUser());
      toast.success("Succesfully logged in");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useRegister = ({ onSuccess }) => {
  const history = useHistory();
  return useMutation(["register"], (values) => registerUser(values), {
    onSuccess: (data, variables, context) => {
      history.push("/");
      toast.success("Succesfully registered");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

export const useForgetPassword = ({ onSuccess }) => {
  return useMutation(
    ["forgetPassword"],
    (username) => forgetPassword(username),
    {
      onSuccess: (data, variables, context) => {
        toast.success(`Please check your registered email !`);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};

export const useResetPassword = ({ onSuccess }) => {
  const history = useHistory();
  return useMutation(["resetPassword"], (values) => resetPassword(values), {
    onSuccess: (data, variables, context) => {
      toast.success(`Password reset successful`);
      history.push("/login");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
