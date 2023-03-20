import MaterialTable from "@material-table/core";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useMemberTable from "../../../hooks/component/member/table/useMemberTable";

const MemberTable = () => {
  const { data, columns, handleDelete } = useMemberTable();
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
          actionsColumnIndex: 5,
        }}
      />
    </div>
  );
};

export default MemberTable;
