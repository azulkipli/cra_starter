import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  </div>
);

export default Home;
