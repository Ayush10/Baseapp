import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useGetMembersByProjectId } from "../../../api/member/useMember";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import moment from "moment";

const useComponentTaskTable = () => {
  const { data: member } = useGetMembersByProjectId();

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
          {member.map((memdata) => {
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
  return { columns };
};

export default useComponentTaskTable;
