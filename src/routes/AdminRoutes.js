import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectCrud from '../views/ProjectCrud';
import Home from '../views/Home';
import Tech from '../views/Tech';
import Projects from '../views/Projects';

export default function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/projectcrud" component={() => <ProjectCrud />} />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/tech" component={() => <Tech />} />
      <Route exact path="/projects" component={() => <Projects />} />
    </Switch>
  );
}
