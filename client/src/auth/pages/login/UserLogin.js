import { Grid } from "@mui/material";
import React from "react";
import LoginForm from "../../component/form/LoginForm";

const UserLogin = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{
          height: "100vh",
        }}>
        <Grid
          item
          sm={0}
          md={7}
          xs={0}
          sx={{
            height: "100vh",
            backgroundImage: "url('/Images/loginBack.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}>
          <div style={{ marginLeft: "10%", borderBottom: "1px black solid" }}>
            {/* <Typography variant="h4" sx={{ color: "#314bb5" }}>
                BASE APP
              </Typography>
            </div>
            <div
              style={{
                marginLeft: "2%",
                marginTop: "10%",
                borderBottom: "1px black solid",
              }}>
              <img
                src="/Images/loginPage.jpg"
                alt="login"
                style={{
                  width: "95%",
                  height: "50vh",
                }}
              /> */}
          </div>
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          xs={12}
          sx={{ borderLeft: "1px solid black" }}>
          <div
            style={{
              borderBottom: "1px solid black",
              margin: "10%",
              color: "#cf2sd3",
            }}>
            <h1>LOGIN</h1>
          </div>
          <div>
            <LoginForm />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default UserLogin;
