import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import useEditProjectForm from "../../../hooks/component/project/form/useEditProjectForm";

const EditProjectForm = ({ data, onClick, open }) => {
  const { initialValues, validationSchema, handleEdit } =
    useEditProjectForm(data);
  return (
    <>
      <Dialog open={open} onClose={() => onClick()}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, FormikHelpers) => {
            handleEdit(values, data?.id);
          }}
          validationSchema={validationSchema}>
          <Form>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogContent>
              <ErrorMessage className="errorMsg" name="name" component="span" />
              <Box height={8} />
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
              <ErrorMessage className="errorMsg" name="type" component="span" />
              <Box height={8} />
              <Field
                name="type"
                type="type"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Type"
                fullWidth
              />
              <Box height={8} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => onClick()}>Cancel</Button>
              <Button
                variant="contained"
                type="submit"
                onClick={() => onClick()}>
                submit
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

export default EditProjectForm;
