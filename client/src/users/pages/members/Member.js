import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import AddMemberForm from "../../components/member/form/AddMemberForm";
import MemberTable from "../../components/member/table/MemberTable";

const Member = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="card-cont-head">
        <CardContentHeader
          title="Members"
          type="add"
          onClick={() => handleOpen()}>
          <AddMemberForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div className="card-content-cust">
        <MemberTable />
      </div>
    </>
  );
};

export default Member;
