import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import fakeDelay from "../utils/fakeDelay";
import Loading from "../components/Loading";

const Home = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "home"*/ "../components/Home")),
  loading: () => Loading("Homepage")
});

const Todos = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "todos"*/ "../components/Todos")),
  loading: () => Loading("Todos")
});

const StatusComponent = Loadable({
  loader: () =>
    fakeDelay(200).then(() => import(/* webpackChunkName: "status-component"*/ "../components/StatusComponent")),
  loading: () => Loading("StatusComponent")
});

const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/status" component={StatusComponent} />
  </Switch>
);

export default MainRoute;
