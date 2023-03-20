import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import { useGetMembersByProjectId } from "../../../api/member/useMember";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  useDeleteTask,
  useGetTaskByProjectId,
  useUpdateTask,
} from "../../../api/task/useTask";
import { LocalizationProvider } from "@mui/lab";
import moment from "moment";

const useTaskTable = () => {
  const { data: member } = useGetMembersByProjectId();
  const { mutate: mutateDelete } = useDeleteTask({});
  const { data } = useGetTaskByProjectId();

  const { mutate: mutateUpdate } = useUpdateTask({});

  const handleUpdateTask = (values) => {
    let rowData = {
      ComponentId: values.ComponentId,
      FinishDate: values.FinishDate,
      assignedTo: values.assignedTo,
      description: values.description,
      id: values.id,
      status: values.status,
      name: values.name,
      type: values.type,
    };
    mutateUpdate(rowData);
  };

  const handleDelete = (id) => {
    mutateDelete(id);
  };

  const columns = [
    { title: "Id", field: "id", editable: "never" },
    { title: "Title", field: "name" },
    { title: "Type", field: "type" },
    { title: "Description", field: "description" },
    {
      title: "Status",
      field: "status",
      lookup: { open: "Open", "to do": "To Do", complete: "Done" },
    },
    {
      title: "Assigned To",
      field: "assignedTo",
      editComponent: (props) => (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Assigned To"
          fullWidth
          onChange={(e) => props.onChange(e.target.value)}>
          {member &&
            member.map((memdata) => {
              return (
                <MenuItem value={memdata?.User?.username}>
                  {memdata?.User?.name}
                </MenuItem>
              );
            })}
        </Select>
      ),
    },
    { title: "Component", field: "ComponentId" },
    {
      title: "Due Date",
      field: "FinishDate",
      render: (rowData) => moment(rowData.FinishDate).format("DD-MM-YYYY"),
      editComponent: (props) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            value={props.value}
            onChange={(newValue) => {
              props.onChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      ),
    },
  ];
  return { data, columns, handleUpdateTask, handleDelete };
};

export default useTaskTable;
