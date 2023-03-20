import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Grid container justifyContent="center" sx={{ height: "100vh" }}>
        <Grid item sm={12} md={7} xs={12}>
          <div class="mainbox404" style={{ marginTop: "10%" }}>
            <div class="err404">4</div>
            <i class="far fa-question-circle fa-spin"></i>
            <div class="err2404">4</div>
            <Paper className="msg404" sx={{ padding: "5%" }} elevation={5}>
              The page your are browsing through may have been removed or is
              currently under construction
              <p>
                Return to{" "}
                <Button component={Link} to="/projects">
                  Home
                </Button>
              </p>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
