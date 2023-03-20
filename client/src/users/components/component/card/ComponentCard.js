import {
  Avatar,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import moment from "moment";
import ComponentTaskChip from "./chip/ComponentTaskChip";
import { useHistory } from "react-router-dom";

const ComponentCard = ({ data }) => {
  const history = useHistory();
  function stringAvatar(name) {
    return {
      children:
        name && `${name.data?.assignedTo.split(" ")[0][0].toUpperCase()}`,
    };
  }
  return (
    <>
      <Paper
        varient="outlined"
        elevation={3}
        onClick={(e) => history.push(`/project/components-${data?.id}`)}
        sx={{ mb: 2, width: "90%", maxWidth: "400px" }}>
        <CardHeader subheader={moment(data[0]?.createdAt).format("ll")} />
        <Divider />
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4">{data?.name}</Typography>
            <Box mt={2} />
            <Typography>{data?.description}</Typography>
            <Box mt={2} />
            <Divider sx={{ mb: 2 }} />
            <Box mt={2} />
            <Typography variant="h6">Tasks: </Typography>
            <Box mt={2} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}>
              {data?.Tasks[0] ? (
                data?.Tasks.map((Tasks, index) => {
                  return (
                    <>
                      <ComponentTaskChip Tasks={Tasks} />
                    </>
                  );
                })
              ) : (
                <>
                  <Chip label="No Task Group" />
                </>
              )}
            </div>
            <Box mt={2} />
            <Divider sx={{ mb: 2 }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {data?.assignedTo ? (
                <>
                  <Tooltip title={data?.assignedTo} placement="top">
                    <Avatar {...stringAvatar({ data })} />
                  </Tooltip>
                </>
              ) : (
                <Chip label="Not Assigned" />
              )}
            </Typography>
          </div>
        </CardContent>
      </Paper>
    </>
  );
};

export default ComponentCard;
