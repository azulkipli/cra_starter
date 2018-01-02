import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Sidebar, Segment, Button, Menu, Image, Message } from "semantic-ui-react";

import SidebarMenu from "./components/SidebarMenu";
import Main from "./Main";

const menuStyle = {
  marginBottom: "0px",
  borderRadius: "0px",
  borderBottom: "none"
};
const pusableStyle = {
  marginTop: "0px",
  borderRadius: "0px"
};

@inject("notification")
@observer
class App extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  clickPushable = () => (this.state.visible ? this.toggleVisibility() : "");
  render() {
    const visible = this.state.visible;
    const { activeItem } = this.state;
    const { notification, history } = this.props;
    console.info("history", history);
    return (
      <div className="ui container">
        <Menu style={menuStyle} borderless>
          <Menu.Menu position="left">
            <Menu.Item icon={visible ? "close" : "bars"} onClick={this.toggleVisibility} />
          </Menu.Menu>

          <Menu.Item name="home" style={{ backgroundColor: "transparent" }} onClick={() => history.push("/")}>
            LOGO
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item icon="help circle outline" onClick={this.toggleVisibility} />
          </Menu.Menu>
        </Menu>

        <Sidebar.Pushable style={pusableStyle} as={Segment}>
          <SidebarMenu visible={visible} toggleVisibility={this.toggleVisibility} />
          <Sidebar.Pusher
            style={{ minHeight: "320px", backgroundColor: visible ? "rgba(0,0,0,0.25)" : "" }}
            onClick={this.clickPushable}
          >
            <Segment basic>
              <Main />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

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
      </div>
    );
  }
}

export default App;
