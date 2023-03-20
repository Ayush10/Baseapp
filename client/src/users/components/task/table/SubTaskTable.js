import MaterialTable from "@material-table/core";
import React, { createRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useSubTaskTable from "../../../hooks/component/task/table/useSubTaskTable";
import AddSubTaskForm from "../form/AddSubTaskForm";

const SubTaskTable = ({ taskId }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const { data, columns, handleUpdateTask } = useSubTaskTable(taskId);
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={data}
        columns={columns}
        title={"Sub-Task"}
        actions={[
          {
            icon: () => <AddIcon />,
            tooltip: "Add user",
            isFreeAction: true,
            onClick: () => {
              handleOpen();
            },
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              handleUpdateTask(newData);
              resolve();
            });
          },
        }}
        options={{
          actionsColumnIndex: 8,
        }}
      />
      <AddSubTaskForm
        open={open}
        handleClose={() => handleClose()}
        TaskId={taskId}
      />
    </div>
  );
};

export default SubTaskTable;
