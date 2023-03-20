import { Chip, Tooltip } from "@mui/material";
import React from "react";

const ComponentTaskChip = ({ Tasks }) => {
  return (
    <>
      <Tooltip title={Tasks?.name} placement="top">
        <Chip label={Tasks?.name} />
      </Tooltip>
    </>
  );
};

export default ComponentTaskChip;
