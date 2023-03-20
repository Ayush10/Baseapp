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
import { useMemberForm } from "../../../hooks/component/member/form/useMemberForm";

const AddMemberForm = ({ open, handleClose }) => {
  const { initialValues, validationSchema, handleAddMember } = useMemberForm();
  return (
    <>
      <Dialog open={open} onClose={() => handleClose()}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, FormikHelpers) => {
            handleAddMember(values);
            FormikHelpers.resetForm();
          }}
          validationSchema={validationSchema}>
          <Form>
            <DialogTitle>Add Member</DialogTitle>
            <DialogContent>
              <ErrorMessage className="errorMsg" name="name" component="span" />
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

export default AddMemberForm;
