import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import View from "./pages/View";
import Error from "./pages/Error";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/:viewId",
    exact: true,
    component: View,
  },
  {
    component: Error,
  },
];

const RootRoutes = () => {
  return (
    <Switch>
      {routes.map((route, key) => {
        return <Route key={key} {...route} />;
      })}
    </Switch>
  );
};

export default RootRoutes;
