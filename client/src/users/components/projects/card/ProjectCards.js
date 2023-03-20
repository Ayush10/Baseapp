import {
  Avatar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const ProjectCards = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/project-${data?.id}`);
  };
  return (
    <Grid item xs={6} md={4}>
      <div>
        <Card
          elevation={12}
          sx={{ mr: 2, mt: 1, cursor: "pointer", maxWidth: "500px" }}
          onClick={() => handleClick()}>
          <CardContent>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={`${data?.createdBy}`}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${data?.name}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        {data?.type}
                      </Typography>
                      {data?.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
};

export default ProjectCards;
