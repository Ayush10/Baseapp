import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from "../app/layout/AppLayout";
import ForgetPassword from "../auth/pages/forget-password/ForgetPassword";
import ResetPassword from "../auth/pages/forget-password/ResetPassword";
import UserLogin from "../auth/pages/login/UserLogin";
import UserRegistration from "../auth/pages/registration/UserRegistration";
import ProjectRoutes from "./projectRoutes/ProjectRoutes";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserLogin} />
        <Route path="/register" exact component={UserRegistration} />
        <Route path="/login" exact component={UserLogin} />
        <Route path="/forget-password" exact component={ForgetPassword} />

        <Route path="/reset-:id" exact component={ResetPassword} />
        <ProtectedRoute redirectTo={"/login"}>
          <AppLayout>
            <ProjectRoutes />
          </AppLayout>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default AppRoute;
