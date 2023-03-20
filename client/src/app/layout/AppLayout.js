import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SideDrawer from "../component/drawer/SideDrawer";
import BottomNavbar from "../component/navbar/BottomNavbar";
import Navbar from "../component/navbar/Navbar";

//style to make the application container responsive
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <main>
      <>
        <div className={classes.container}>
          <SideDrawer />
          <Navbar />
          <Grid container justifyContent="center">
            <Grid item sm={12} md={10} xs={12}>
              <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 7 }}>
                {children}
              </Box>
            </Grid>
          </Grid>
          <BottomNavbar />
        </div>
      </>
    </main>
  );
};

export default AppLayout;
