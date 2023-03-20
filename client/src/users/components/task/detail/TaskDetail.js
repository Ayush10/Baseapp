import { Card, Grid, Paper } from "@mui/material";
import moment from "moment";
import React from "react";
import SubTaskTable from "../table/SubTaskTable";

const TaskDetail = ({ data }) => {
  return (
    <>
      <Paper sx={{ mt: 2, pb: 5, mr: 2 }}>
        <Grid container>
          <Grid item xs={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Title : {data?.name}</p>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Type : {data?.type}</p>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Status : {data?.status}</p>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Description : {data?.description}</p>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Assigned To : {data?.assignedTo}</p>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ textAlign: "Left", pl: 8 }}>
              <p>Due Date : {moment(data.FinishDate).format("DD-MM-YYYY")}</p>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <SubTaskTable taskId={data?.id} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TaskDetail;
