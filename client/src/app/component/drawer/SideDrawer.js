import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MediationIcon from "@mui/icons-material/Mediation";
import SettingsIcon from "@mui/icons-material/Settings";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";

const drawerWidth = 240;

const marginHeight = 65;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: marginHeight,
  margin: 0,
  padding: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  margin: 0,
  padding: 0,
  marginTop: marginHeight,
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  display: { xs: "none", md: "flex" },
  flexShrink: 0,
  margin: 0,
  padding: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "43%",
  marginBottom: "10%",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SideDrawer = () => {
  const history = useHistory();
  const handleNavClick = (e) => {
    const navPage = e.currentTarget.value.toLowerCase();
    if (navPage === "kanban-board") {
      history.push(`/project/kanban`);
    } else {
      history.push(`/project/${navPage}`);
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  let itemList = [
    {
      text: "Kanban-Board",
      icon: <ViewKanbanIcon />,
    },
    {
      text: "Issues",
      icon: <PriorityHighIcon />,
    },
    {
      text: "Components",
      icon: <MediationIcon />,
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  const location = useLocation();

  let varient = "temporary";

  if (
    [
      "/project/members",
      "/project/task",
      "/project/kanban",
      "/project/issues",
      "/project/components",
    ].indexOf(location.pathname) >= 0
  ) {
    varient = "permanent";
  }

  if (
    matchPath(location.pathname, { path: "/project-:id" }) ||
    matchPath(location.pathname, { path: "/project/components-:id" })
  ) {
    varient = "permanent";
  }

  return (
    <div>
      <Drawer variant={varient} open={drawerOpen}>
        <DrawerHeader>
          {!drawerOpen ? (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem button key={text}>
                <div className="drawerList" style={{ margin: 0, padding: 0 }}>
                  <Button
                    key={text}
                    value={text}
                    onClick={(e) => handleNavClick(e)}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText sx={{ color: "#404040" }} primary={text} />
                  </Button>
                </div>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
