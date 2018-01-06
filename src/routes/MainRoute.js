import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
// import fakeDelay from "../utils/fakeDelay";
import Loading from "../components/Loading";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../components/Home"),
  loading: () => <Loading />
});

const Todos = Loadable({
  loader: () => import(/* webpackChunkName: "todos"*/ "../components/Todos"),
  loading: () => <Loading />
});

const StatusComponent = Loadable({
  loader: () => import(/* webpackChunkName: "status"*/ "../components/StatusComponent"),
  loading: () => <Loading />
});

const Help = Loadable({
  loader: () => import(/* webpackChunkName: "help"*/ "../components/Help"),
  loading: () => <Loading />
});

const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/help" component={Help} />
    <Route path="/status" component={StatusComponent} />
  </Switch>
);

export default MainRoute;
