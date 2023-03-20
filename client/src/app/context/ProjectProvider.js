import { createContext, useState } from "react";
import { getCookie } from "../utils/cookies";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const project = getCookie("proj");
  const [datas, setDatas] = useState(project);
  const projectId = datas?.id;
  const projectName = datas?.name;
  const createdBy = datas?.createdBy;

  return (
    <ProjectContext.Provider
      value={{ projectId, projectName, createdBy, setDatas }}>
      {children}
    </ProjectContext.Provider>
  );
};
