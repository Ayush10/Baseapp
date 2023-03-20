import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import CardContentHeader from "../../../../app/component/card/header/CardContentHeader";
import EditComponentForm from "../../../components/component/form/EditComponentForm";
import ComponentTaskTable from "../../../components/component/table/ComponentTaskTable";
import { useGetComponentById } from "../../../hooks/api/component/useComponent";

const ComponentDetail = () => {
  const { params: { id } = {} } = useRouteMatch();
  const { data, isLoading } = useGetComponentById(id);
  const [open, setOpen] = useState(false);
  const onClick = () => {
    !open ? setOpen(true) : setOpen(false);
  };
  return isLoading ? (
    <Skeleton />
  ) : (
    <>
      <div className="card-cont-head" style={{ marginLeft: "2%" }}>
        <CardContentHeader
          title="Component Detail"
          type="edit"
          onClick={() => onClick()}>
          <EditComponentForm
            data={data}
            open={open}
            onClick={() => onClick()}
          />
        </CardContentHeader>
      </div>
      <Box sx={{ margin: " 5px 0 5px 13px" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Name: {data?.name}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Description: {data?.description}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Created By: {data?.createdBy}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Assigned To: {data?.assignedTo}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Status: {data?.status}</h4>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <div>
        <ComponentTaskTable tasks={data?.Tasks} />
      </div>
    </>
  );
};

export default ComponentDetail;
