import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
// import fakeDelay from "../utils/fakeDelay";
import Loading from "../components/Loading";

const ListTodos = Loadable({
  loader: () => import(/* webpackChunkName: "list-todos"*/ "../components/ListTodos"),
  loading: () => <Loading />
});

const TodoDetail = Loadable({
  loader: () => import(/* webpackChunkName: "list-todos"*/ "../components/TodoDetail"),
  loading: () => <Loading />
});

const TodoRoute = () => (
  <Switch>
    <Route exact path="/todos" component={ListTodos} />
    <Route path="/todos/todo-detail/:number" component={TodoDetail} />
  </Switch>
);

export default TodoRoute;
