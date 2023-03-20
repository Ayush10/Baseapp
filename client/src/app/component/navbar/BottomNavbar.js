import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MediationIcon from "@mui/icons-material/Mediation";
import SettingsIcon from "@mui/icons-material/Settings";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";

export default function LabelBottomNavigation() {
  const history = useHistory();

  const location = useLocation();

  const handleNavClick = (newValue) => {
    const navPage = newValue.toLowerCase();
    history.push(`/project/${navPage}`);
  };

  var letNav = false;

  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleNavClick(newValue);
  };

  if (
    [
      "/project/members",
      "/project/task",
      "/project/kanban",
      "/project/issues",
      "/project/components",
    ].indexOf(location.pathname) >= 0
  ) {
    letNav = true;
  }

  if (
    matchPath(location.pathname, { path: "/project-:id" }) ||
    matchPath(location.pathname, { path: "/project/components-:id" })
  ) {
    letNav = true;
  }

  let itemList = [
    {
      text: "Kanban",
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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowDimensions.width <= 600 && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}>
          {letNav && (
            <BottomNavigation
              style={{ backgroundColor: "#edeae5" }}
              value={value}
              showLables={false}
              onChange={handleChange}>
              {itemList.map((item, index) => {
                const { text, icon } = item;
                return (
                  <BottomNavigationAction
                    label={text}
                    value={text}
                    icon={icon}
                  />
                );
              })}
            </BottomNavigation>
          )}
        </Paper>
      )}
    </>
  );
}
