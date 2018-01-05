import React, { Component } from "react";
import { Sidebar, Segment, Message } from "semantic-ui-react";

import SidebarMenu from "./components/SidebarMenu";
import Navheader from "./components/Navheader";
import Main from "./Main";
import { observer, inject } from "mobx-react";

import "./semantic/components/segment.min.css";
import "./semantic/components/menu.min.css";
import "./semantic/components/message.min.css";

const pusableStyle = {
  marginTop: "0px",
  borderRadius: "0px"
};

@inject("notification")
@observer
class App extends Component {
  state = { visible: false };

  toggleSidebarMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  clickPushable = () => (this.state.visible ? this.toggleSidebarMenu() : "");

  goTo = pathname => {
    this.setState({ visible: false });
    this.props.notification.attr({ open: false });
    this.props.history.push(pathname);
  };

  render() {
    const visible = this.state.visible;
    const { notification } = this.props;
    let pusherStyle = {
      minHeight: "320px",
      position: "relative",
      posbackgroundColor: visible ? "rgba(0,0,0,0.25)" : ""
    };
    console.warn("App props", this.props);
    return (
      <div className="app">
        <Navheader visible={visible} goTo={this.goTo} toggleSidebarMenu={this.toggleSidebarMenu} />
        <Sidebar.Pushable style={pusableStyle} as={Segment}>
          <SidebarMenu visible={visible} goTo={this.goTo} />
          <Sidebar.Pusher style={pusherStyle} onClick={this.clickPushable}>
            <Segment id="appSegment" basic>
              <Main />
            </Segment>
            {/* Show Notification  */}
            {notification.open ? (
              <Message
                style={{ position: "fixed", top: "0", left: "3%", width: "94%" }}
                className={"notification " + notification.showHide}
                error={notification.error}
                info={notification.info}
                warning={notification.warning}
                onClick={() => {
                  notification.close();
                }}
                onDismiss={() => {
                  notification.close();
                }}
                header={notification.title}
                content={<div dangerouslySetInnerHTML={{ __html: notification.message }} />}
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

export default App;
