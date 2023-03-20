import MaterialTable from "@material-table/core";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useIssueTable from "../../../hooks/component/issue/table/useIssueTable";

const IssueTable = () => {
  const { data, columns, handleUpdateIssue, handleDelete } = useIssueTable();
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={data}
        columns={columns}
        title={""}
        editable={{
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              handleUpdateIssue(newData);
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
          actionsColumnIndex: 6,
        }}
      />
    </div>
  );
};

export default IssueTable;
