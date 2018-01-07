import React, { Component } from "react";
import { Sidebar, Segment, Message, Loader, Dimmer } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import SidebarMenu from "./components/SidebarMenu";
import Navheader from "./components/Navheader";
import Main from "./Main";
import { observer, inject } from "mobx-react";

const pusableStyle = {
  marginTop: "0px",
  borderRadius: "0px"
};

@inject("gui")
@observer
class App extends Component {
  goTo = pathname => {
    this.props.gui.attr({ sidebarMenuVisible: false });
    this.props.history.push(pathname);
  };

  render() {
    const { gui } = this.props;
    const visible = gui.sidebarMenuVisible;
    const pusherStyle = {
      minHeight: window.innerHeight - 50
    };
    const dimmerStyle = {
      minHeight: window.innerHeight - 50,
      backgroundColor: "rgba(0,0,0,.5)"
    };
    return (
      <div className="app">
        <Navheader goTo={this.goTo} />
        <Sidebar.Pushable style={pusableStyle} as={Segment}>
          <SidebarMenu visible={visible} goTo={this.goTo} />
          <Sidebar.Pusher style={pusherStyle} dimmed={visible}>
            <Segment id="appSegment" basic>
              <Dimmer active={gui.loaderActive} style={dimmerStyle}>
                <Loader size="large">Loading</Loader>
              </Dimmer>
              <Main />
            </Segment>
            {/* Show Notification  */}
            {gui.alertOpen ? (
              <Message
                style={{ position: "fixed", top: "0", left: "3%", width: "94%" }}
                error={gui.alertType === "error" ? true : false}
                info={gui.alertType === "info" ? true : false}
                warning={gui.alertType === "warning" ? true : false}
                onClick={() => {
                  gui.closeAlert();
                }}
                onDismiss={() => {
                  gui.closeAlert();
                }}
                header={gui.alertTitle}
                content={<div dangerouslySetInnerHTML={{ __html: gui.alertMessage }} />}
              />
            ) : (
              ""
            )}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withRouter(App);
