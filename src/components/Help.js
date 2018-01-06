import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("notification")
@observer
class Help extends Component {
  render() {
    return (
      <div className="ui container">
        <Header className="title" textAlign="center">
          Help
        </Header>
      </div>
    );
  }
}

export default Help;
