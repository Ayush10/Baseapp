import Cookies from "js-cookie";
import { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { getCookie } from "../app/utils/cookies";

const ProtectedRoute = ({ redirectTo, component: Component, ...rest }) => {
  const history = useHistory();
  const data = getCookie("Auth");
  const token = data?.token;

  const accessToken = token;

  useEffect(() => {
    return () => {
      if (!token) {
        Cookies.remove("Auth");
        history.push("/login");
      }
    };
    // eslint-disable-next-line
  }, [token]);

  if (!accessToken) return <Redirect to={redirectTo} />;
  return <Route {...rest} />;
};

export default ProtectedRoute;
