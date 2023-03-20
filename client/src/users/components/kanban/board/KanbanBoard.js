import React from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import useKanbanBoard from "../../../hooks/component/kanban/board/useKanbanBoard";
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

const KanbanBoard = ({ card }) => {
  const { handleCardMove, controlledBoard } = useKanbanBoard(card);
  function stringAvatar(name) {
    return {
      children: name && `${name?.assignedTo.split(" ")[0][0]}`,
    };
  }
  return (
    <>
      <Board
        renderCard={(
          { createdAt, title, description, assignedTo, type },
          { dragging }
        ) => {
          return (
            <Paper
              varient="outlined"
              elevation={3}
              dragging={dragging}
              sx={{ mb: 2, width: "250px" }}>
              <CardHeader subheader={createdAt} />
              <Divider />
              <CardContent>
                <div style={{ textAlign: "center" }}>
                  <Typography variant="h4">{title}</Typography>
                  <Box mt={2} />
                  <Typography>{description}</Typography>
                  <Box mt={2} />
                  <Divider sx={{ mb: 2 }} />
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <Chip label={type} />
                  <Typography>
                    {assignedTo ? (
                      <>
                        <Tooltip title={assignedTo} placement="top">
                          <Avatar {...stringAvatar({ assignedTo })} />
                        </Tooltip>
                      </>
                    ) : (
                      <Chip label="Not Assigned" />
                    )}
                  </Typography>
                </div>
              </CardContent>
            </Paper>
          );
        }}
        onCardDragEnd={handleCardMove}
        disableColumnDrag>
        {controlledBoard}
      </Board>
    </>
  );
};

export default KanbanBoard;
