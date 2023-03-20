import { Box, Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useResetPasswordForm } from "../../hooks/components/forgetPassword/form/useResetPasswordForm";

const ResetPasswordForm = ({ id }) => {
  const { handleResetPassword, initialValues, validationSchema } =
    useResetPasswordForm();
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, FormikHelpers) => {
          handleResetPassword(values, id);
          FormikHelpers.resetForm();
        }}
        validationSchema={validationSchema}>
        <Form>
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
          <ErrorMessage
            className="errorMsg"
            name="conformPassword"
            component="span"
          />
          <Box height={8} />
          <Field
            name="conformPassword"
            type="password"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Conform Password"
            fullWidth
          />
          <Box height={8} />
          <Button variant="contained" type="submit">
            submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
