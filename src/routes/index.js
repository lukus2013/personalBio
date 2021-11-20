import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Tech from '../views/Tech';
import Projects from '../views/Projects';

export default function MyRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/tech" component={() => <Tech />} />
        <Route exact path="/projects" component={() => <Projects />} />
      </Switch>
    </div>
  );
}
