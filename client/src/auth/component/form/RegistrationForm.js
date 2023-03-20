import { Button, Box, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import { useRegisterForm } from "../../hooks/components/register/form/useRegisterForm";

const RegistrationForm = () => {
  const { handleRegister, initialValues, validationSchema } = useRegisterForm();
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, FormikHelpers) => {
          handleRegister(values);
          FormikHelpers.resetForm();
        }}
        validationSchema={validationSchema}>
        <Form>
          <ErrorMessage className="errorMsg" name="name" component="span" />
          <Field
            name="name"
            type="name"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Name"
            fullWidth
          />
          <Box height={8} />
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
          <ErrorMessage
            className="errorMsg"
            name="phoneNumber"
            component="span"
          />
          <Box height={8} />
          <Field
            name="phoneNumber"
            type="phoneNumber"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Contact"
            fullWidth
          />

          <Box height={8} />
          <ErrorMessage className="errorMsg" name="address" component="span" />
          <Box height={8} />
          <Field
            name="address"
            type="address"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Address"
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
            Register
          </Button>
          <Box height={8} />
          <Button component={Link} to="/">
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
