import { Grid } from "@mui/material";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import ResetPasswordForm from "../../component/form/ResetPasswordForm";

const ResetPassword = () => {
  const { params: { id } = {} } = useRouteMatch();
  return (
    <div className="registrationContainer">
      <Grid container justifyContent="center" sx={{ height: "100vh" }}>
        <Grid item sm={12} md={7} xs={12}>
          <div style={{ marginTop: "20%" }}>
            <ResetPasswordForm id={id} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPassword;
