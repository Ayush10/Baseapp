import Chart from "react-apexcharts";
import { Card, Divider, Grid, Paper } from "@mui/material";
import React from "react";
import { useDashboardDetails } from "../../hooks/component/dashboard/useDashboardDetails";

const Dashboard = ({ id }) => {
  const { data, options, series } = useDashboardDetails(id);

  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        columnSpacing={6}
        sx={{ mb: 1 }}>
        <Grid item xs={12} md={3} sx={{ mt: 1 }}>
          <Card sx={{ textAlign: "center" }}>
            <p>Number of Task: {data?.totalTask}</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: 1 }}>
          <Card sx={{ textAlign: "center" }}>
            <p>Number of Members: {data?.totalMembers}</p>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: 1 }}>
          <Card sx={{ textAlign: "center" }}>
            <p>Number of Issues: {data?.totalIssue}</p>
          </Card>
        </Grid>
      </Grid>
      <Divider />
      <Paper elevation={5} sx={{ pb: 5 }}>
        <Grid container sx={{ mt: 6, ml: 7 }}>
          <Grid item xs={12}>
            <div style={{ marginLeft: 4, marginBottom: 5 }}>
              <h2>Task</h2>
            </div>
            <Divider />
          </Grid>
          {data && (
            <>
              {" "}
              <Grid item xs={12} md={6}>
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  width="70%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Chart
                  options={options}
                  series={series}
                  type="line"
                  width="70%"
                />
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
      <Divider />
    </div>
  );
};

export default Dashboard;
