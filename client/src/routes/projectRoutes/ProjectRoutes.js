import { Route, Switch } from "react-router-dom";
import NotFound from "../../app/pages/NotFound";
import Component from "../../users/pages/component/Component";
import ComponentDetail from "../../users/pages/component/detail/ComponentDetail";
import Issue from "../../users/pages/issue/Issue";
import Kanban from "../../users/pages/kanban/Kanban";
import Member from "../../users/pages/members/Member";
import Project from "../../users/pages/Project/Project";
import Setting from "../../users/pages/Project/Setting";
import Projects from "../../users/pages/projects/Projects";
import Task from "../../users/pages/task/Task";

const ProjectRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/members" exact component={Member} />
        <Route path="/project/task" exact component={Task} />
        <Route path="/project/kanban" exact component={Kanban} />
        <Route path="/project/issues" exact component={Issue} />
        <Route path="/project/components" exact component={Component} />
        <Route path="/project/settings" exact component={Setting} />

        <Route path="/project-:id" exact component={Project} />
        <Route
          path="/project/components-:id"
          exact
          component={ComponentDetail}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default ProjectRoutes;
