import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
class Loading extends Component {
  componentWillMount = () => {
    this.props.gui.openLoader();
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.props.gui.closeLoader();
    }, 200);
  };

  render() {
    return <div />;
  }
}

export default Loading;
