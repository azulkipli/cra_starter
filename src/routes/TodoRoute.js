import React from "react";
import { Switch, Route } from "react-router-dom";
// import ListTodos from "../components/ListTodos";
// import TodoDetail from "../components/TodoDetail";
import Loadable from "react-loadable";
import fakeDelay from "../utils/fakeDelay";
import Loading from "../components/Loading";

const ListTodos = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "list-todos"*/ "../components/ListTodos")),
  loading: () => Loading("ListTodos")
});

const TodoDetail = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "list-todos"*/ "../components/TodoDetail")),
  loading: () => Loading("TodoDetail")
});

const TodoRoute = () => (
  <Switch>
    <Route exact path="/todos" component={ListTodos} />
    <Route path="/todos/todo-detail/:number" component={TodoDetail} />
  </Switch>
);

export default TodoRoute;
