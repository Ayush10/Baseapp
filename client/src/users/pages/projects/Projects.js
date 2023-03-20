import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import ProjectCards from "../../components/projects/card/ProjectCards";
import AddProjectForm from "../../../users/components/projects/form/AddProjectForm";
import { useGetUserProjects } from "../../hooks/api/projects/useProjects";
import { Grid } from "@mui/material";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetUserProjects();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        <CardContentHeader
          title="Projects"
          type="add"
          onClick={() => handleOpen()}>
          <AddProjectForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div className="card-content-cust">
        <Grid container>
          {data &&
            data.project &&
            data.project.map((arrayData) => {
              return <ProjectCards data={arrayData} />;
            })}
          {data &&
            data.member &&
            data.member.map((arrayData) => {
              return <ProjectCards data={arrayData?.Project} />;
            })}
        </Grid>
      </div>
    </>
  );
};

export default Projects;
