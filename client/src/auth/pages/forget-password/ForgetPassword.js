import { Grid } from "@mui/material";
import React from "react";
import ForgetPasswordForm from "../../component/form/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="registrationContainer">
      <Grid container justifyContent="center" sx={{ height: "100vh" }}>
        <Grid item sm={12} md={7} xs={12}>
          <div style={{ marginTop: "20%" }}>
            <ForgetPasswordForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgetPassword;
