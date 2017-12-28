import React from "react";
import { Link } from "react-router-dom";

const About = props => (
  <div>
    <h2>About</h2>
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

export default About;
