import React from "react";
import { Link } from "react-router-dom";
import API from "../API";

const ListToDos = () => (
  <div className="ui container">
    <ul>
      {API.all().map(todo => (
        <li key={todo.number}>
          <Link to={`/todos/todo-detail/${todo.number}`}>{todo.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ListToDos;
