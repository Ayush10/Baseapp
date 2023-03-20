import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import ComponentCard from "../../components/component/card/ComponentCard";
import AddComponentForm from "../../components/component/form/AddComponentForm";
import { useGetComponentByProjectId } from "../../hooks/api/component/useComponent";

const Component = () => {
  const { data, isLoading } = useGetComponentByProjectId();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return isLoading ? (
    <Skeleton />
  ) : (
    <>
      <div className="card-cont-head" style={{ marginLeft: "2%" }}>
        <CardContentHeader
          title="Component"
          type="add"
          onClick={() => handleOpen()}>
          <AddComponentForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div
        className="card-content-cust"
        style={{
          marginLeft: "1%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}>
        {data &&
          data.map((data, index) => {
            return <ComponentCard data={data} />;
          })}
      </div>
    </>
  );
};

export default Component;
