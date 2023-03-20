import MaterialTable from "@material-table/core";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import React, { createRef } from "react";
import useTaskTable from "../../../hooks/component/task/table/useTaskTable";
import useComponentTaskTable from "../../../hooks/component/component/table/useComponentTaskTable";

const ComponentTaskTable = ({ tasks }) => {
  const { columns } = useComponentTaskTable();
  const { handleUpdateTask } = useTaskTable();
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={tasks}
        columns={columns}
        title={""}
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
    </div>
  );
};

export default ComponentTaskTable;
