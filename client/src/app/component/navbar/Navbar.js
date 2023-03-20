import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useHistory, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "./../../assets/logo.png";
import { useSelector } from "react-redux";
import { matchPath } from "react-router-dom";

const Navbar = () => {
  let pages = ["Projects"];
  const { project } = useSelector((state) => state.project);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const history = useHistory();

  if (
    [
      "/project/members",
      "/project/task",
      "/project/kanban",
      "/project/issues",
      "/project/components",
    ].indexOf(location.pathname) >= 0
  ) {
    pages = ["Dashboard", "Task", "Members"];
  }

  if (
    matchPath(location.pathname, { path: "/project-:id" }) ||
    matchPath(location.pathname, { path: "/project/components-:id" })
  ) {
    pages = ["Dashboard", "Task", "Members"];
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (e) => {
    const navPage = e.currentTarget.value.toLowerCase();
    if (navPage === "projects") {
      history.push(`/${navPage}`);
    } else if (navPage === "dashboard") {
      history.push(`/project-${project?.id}`);
    } else {
      history.push(`/project/${navPage}`);
    }
  };

  const handleLogOut = () => {
    Cookies.remove("Auth");
    history.push("/login");
  };

  return (
    <AppBar sx={{ background: "#0B0c10" }}>
      <Container maxWidth="xl" sx={{ m: 0 }}>
        <Toolbar disableGutters>
          <Container
            nowrap
            component="div"
            sx={{
              width: "200px",
              display: { xs: "none", md: "flex" },
            }}>
            <img
              alt="logo"
              src={logo}
              onClick={() => history.push("/projects")}
              style={{
                width: "170px",
                objectFit: "scale-down",
                cursor: "pointer",
              }}
            />
          </Container>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    onClick={(e) => handleNavClick(e)}
                    key={page}
                    value={page}
                    textAlign="center">
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Container
            component="div"
            noWrap
            sx={{
              flexGrow: 3,
              width: "70px",
              p: 0,
              display: { xs: "flex", md: "none" },
            }}>
            <img
              alt="logo"
              src={logo}
              onClick={() => history.push("/projects")}
              style={{
                width: "100px",
                objectFit: "scale-down",
                cursor: "pointer",
              }}
            />
          </Container>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                value={page}
                onClick={(e) => handleNavClick(e)}
                sx={{ color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" onClick={handleLogOut}>
              Log Out
            </Button>
            <Tooltip title="Open settings">
              <IconButton
                onClick={() => {
                  console.log("Clicked");
                }}
                sx={{ p: 0 }}>
                <Avatar alt="Ngima Sherpa" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
