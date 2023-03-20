import React from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import { useGetProjectById } from "../../hooks/api/projects/useProjects";
import { setProject } from "../../../app/slice/projectSlice";
import Dashboard from "../../components/dashboard/Dashboard";

const Project = () => {
  const { params: { id } = {} } = useRouteMatch();
  const { data } = useGetProjectById(id);
  const dispatch = useDispatch();
  dispatch(setProject());

  return (
    <>
      <div>
        <CardContentHeader title="Project">
          <h4> {`ID : ${data?.id}`}</h4>
        </CardContentHeader>
      </div>
      <Dashboard id={id} />
    </>
  );
};

export default Project;
