import { MenuItem, Select } from "@mui/material";
import {
  useDeleteIssue,
  useGetIssueByProjectId,
  useUpdateIssue,
} from "../../../api/issue/useIssue";
import { useGetMembersByProjectId } from "../../../api/member/useMember";

const useIssueTable = () => {
  const { data } = useGetIssueByProjectId();
  const { data: member } = useGetMembersByProjectId();
  const { mutate: mutateUpdate } = useUpdateIssue({});
  const { mutate: mutateDelete } = useDeleteIssue({});

  const handleUpdateIssue = (values) => {
    let rowData = {
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
  ];
  return { data, columns, handleUpdateIssue, handleDelete };
};

export default useIssueTable;
