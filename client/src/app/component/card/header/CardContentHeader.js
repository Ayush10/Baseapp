import { Divider, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

const CardContentHeader = ({ title, type, onClick, open, children }) => {
  return (
    <>
      <div className="Card-Header">
        {title && <Typography variant="h3">{title}</Typography>}
        {type && (
          <Fab
            color="primary"
            onClick={() => onClick()}
            size="medium"
            sx={{ background: "#45A29e" }}
            aria-label="add">
            {type === "add" ? (
              <>
                <AddIcon />
              </>
            ) : type === "edit" && !open ? (
              <EditIcon />
            ) : open ? (
              <ArrowBackIosIcon />
            ) : (
              <>{type}</>
            )}
          </Fab>
        )}
        {children}
      </div>
      <Divider />
    </>
  );
};

export default CardContentHeader;
