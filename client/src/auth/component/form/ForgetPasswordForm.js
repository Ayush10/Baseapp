import { Box, Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useForgetPasswordForm } from "../../hooks/components/forgetPassword/form/useForgetPasswordForm";

const ForgetPasswordForm = () => {
  const { handleForgetPassword, initialValues, validationSchema } =
    useForgetPasswordForm();
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, FormikHelpers) => {
          handleForgetPassword(values?.username);
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
          <Button variant="contained" type="submit">
            Send email
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPasswordForm;
