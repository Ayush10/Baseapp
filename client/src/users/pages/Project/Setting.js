import { Card, Grid, Paper, Skeleton } from "@mui/material";
import Moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import EditProjectForm from "../../components/project/form/EditProjectForm";
import { useGetProjectById } from "../../hooks/api/projects/useProjects";

const Setting = () => {
  const { project } = useSelector((state) => state.project);
  const { data, isLoading } = useGetProjectById(project?.id);
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
          title="Setting"
          type="edit"
          onClick={() => onClick()}>
          <EditProjectForm data={data} open={open} onClick={() => onClick()} />
        </CardContentHeader>
      </div>
      <Paper sx={{ mt: 2 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Title : {data?.name}</p>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Type : {data?.type}</p>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Id : {data?.id}</p>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Created By : {data?.createdBy}</p>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Number of Members : {data?.numberOfMembers}</p>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Created At : {Moment(data.createdAt).format("DD-MM-YYYY")}</p>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Setting;
