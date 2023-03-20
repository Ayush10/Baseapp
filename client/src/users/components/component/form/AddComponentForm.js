import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useComponentForm } from "../../../hooks/component/component/form/useComponentForm";

const AddComponentForm = ({ open, handleClose }) => {
  const { initialValues, validationSchema, handleAddComponent } =
    useComponentForm();
  return (
    <>
      <Dialog open={open} onClose={() => handleClose()}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, FormikHelpers) => {
            handleAddComponent(values);
            FormikHelpers.resetForm();
          }}
          validationSchema={validationSchema}>
          <Form>
            <DialogTitle>Add Component</DialogTitle>
            <DialogContent>
              <ErrorMessage className="errorMsg" name="name" component="span" />
              <Box height={8} />
              <Field
                name="name"
                type="name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Title"
                fullWidth
              />
              <Box height={8} />
              <ErrorMessage className="errorMsg" name="type" component="span" />
              <Box height={8} />
              <Field
                name="description"
                type="description"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Description"
                multiline
                maxRows={6}
                fullWidth
              />
              <Box height={8} />
              <Field
                name="assignedTo"
                type="status"
                as={TextField}
                variant="outlined"
                color="primary"
                label="assignedTo"
                fullWidth
              />
              <Box height={8} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose()}>Cancel</Button>
              <Button
                variant="contained"
                type="submit"
                onClick={() => handleClose()}>
                submit
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

export default AddComponentForm;
