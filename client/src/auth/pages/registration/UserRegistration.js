import { Grid } from "@mui/material";
import React from "react";
import RegistrationForm from "../../component/form/RegistrationForm";

function UserRegistration() {
  return (
    <div className="registrationContainer">
      <Grid container justifyContent="center" sx={{ height: "100vh" }}>
        <Grid item sm={12} md={7} xs={12}>
          <div style={{ marginTop: "20%" }}>
            <RegistrationForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserRegistration;
