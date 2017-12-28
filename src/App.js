import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";

import fakeDelay from "./utils/fakeDelay";
import Loading from "./components/Loading";

let Home = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "home"*/ "./containers/Home")),
  loading: () => Loading("Homepage")
});

let About = Loadable({
  loader: () => fakeDelay(500).then(() => import(/* webpackChunkName: "about"*/ "./containers/About")),
  loading: () => Loading("About")
});

let Topics = Loadable({
  loader: () => fakeDelay(200).then(() => import(/* webpackChunkName: "topics"*/ "./containers/Topics")),
  loading: () => Loading("Topics")
});

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
