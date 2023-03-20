import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import AddIssueForm from "../../components/issue/form/AddIssueForm";
import IssueTable from "../../components/issue/table/IssueTable";

const Issue = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="card-cont-head" style={{ marginLeft: "2%" }}>
        <CardContentHeader
          title="Issues"
          type="add"
          onClick={() => handleOpen()}>
          <AddIssueForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div className="card-content-cust" style={{ marginLeft: "1%" }}>
        <IssueTable />
      </div>
    </>
  );
};

export default Issue;
