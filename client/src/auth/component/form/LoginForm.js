import { Button, Box, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import { useLoginForm } from "../../hooks/components/login/form/useLoginForm";

const LoginForm = () => {
  const { handleLogin, initialValues, validationSchema } = useLoginForm();
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, FormikHelpers) => {
          handleLogin(values);
          FormikHelpers.resetForm();
        }}
        validationSchema={validationSchema}>
        <Form>
          <ErrorMessage className="errorMsg" name="username" component="span" />
          <Box height={8} />
          <Field
            name="username"
            type="username"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Username"
            fullWidth
          />
          <Box height={8} />
          <ErrorMessage className="errorMsg" name="password" component="span" />
          <Box height={8} />
          <Field
            name="password"
            type="password"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Password"
            fullWidth
          />
          <Box height={8} />
          <Button variant="contained" type="submit">
            Log In
          </Button>
          <Box height={8} />
          <p>
            Don't have an account?
            <Button component={Link} to="/register">
              Sign Up
            </Button>
            |{" "}
            <Button component={Link} to="/forget-password">
              Reset Password
            </Button>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
