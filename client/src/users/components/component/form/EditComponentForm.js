import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useGetMembersByProjectId } from "../../../hooks/api/member/useMember";
import { useEditComponentForm } from "../../../hooks/component/component/form/useEditComponentForm";

const EditComponentForm = ({ data, onClick, open }) => {
  const { initialValues, validationSchema, handleEdit } =
    useEditComponentForm(data);
  const { data: member } = useGetMembersByProjectId({});
  const status = [
    { value: "open", Key: "Open" },
    { value: "todo", Key: "To Do" },
    { value: "complete", Key: "Done" },
  ];
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
            <DialogTitle>Edit Component</DialogTitle>
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
              <Field
                as={Select}
                name="status"
                type="status"
                variant="outlined"
                color="primary"
                label="Status"
                fullWidth>
                {status &&
                  status.map((stat) => {
                    return <MenuItem value={stat?.value}>{stat?.Key}</MenuItem>;
                  })}
              </Field>
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

export default EditComponentForm;
