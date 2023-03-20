import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useGetMembersByProjectId } from "../../../hooks/api/member/useMember";
import { useSubTaskForm } from "../../../hooks/component/task/form/useSubTaskForm";

const AddSubTaskForm = ({ open, handleClose, TaskId }) => {
  const { initialValues, validationSchema, handleAddTask } = useSubTaskForm();
  const { data: member } = useGetMembersByProjectId({});
  return (
    <>
      <Dialog open={open} onClose={() => handleClose()}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, FormikHelpers) => {
            handleAddTask(values, TaskId);
            FormikHelpers.resetForm();
          }}
          validationSchema={validationSchema}>
          <Form>
            <DialogTitle>Add SubTask</DialogTitle>
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
                name="type"
                type="type"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Type"
                fullWidth
              />
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
                as={Select}
                name="assignedTo"
                type="assignedTo"
                variant="outlined"
                color="primary"
                label="Assigned To"
                fullWidth>
                {member &&
                  member.map((memdata) => {
                    return (
                      <MenuItem value={memdata?.User?.username}>
                        {memdata?.User?.name}
                      </MenuItem>
                    );
                  })}
              </Field>
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

export default AddSubTaskForm;
