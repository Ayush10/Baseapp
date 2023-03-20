import MaterialTable from "@material-table/core";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useTaskTable from "../../../hooks/component/task/table/useTaskTable";
import TaskDetail from "../detail/TaskDetail";

const TaskTable = () => {
  const { data, columns, handleUpdateTask, handleDelete } = useTaskTable();
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={data}
        columns={columns}
        title={""}
        detailPanel={({ rowData }) => {
          return (
            <>
              <TaskDetail data={rowData} />
            </>
          );
        }}
        editable={{
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              handleUpdateTask(newData);
              resolve();
            });
          },
          onRowDelete: (oldData) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                handleDelete(oldData?.id);
                resolve();
              }, 1000);
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

export default TaskTable;
