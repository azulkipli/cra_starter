import React, { Component } from "react";
import { Sidebar, Menu } from "semantic-ui-react";

const menuStyle = {
  borderTop: "none",
  borderBottom: "none",
  borderLeft: "none"
};
const menuItemStyle = {
  textAlign: "left"
};

class SidebarMenu extends Component {
  render() {
    const { visible, goTo } = this.props;
    return (
      <Sidebar
        as={Menu}
        id="sidebarMenu"
        animation="overlay"
        width="thin"
        visible={visible}
        icon="labeled"
        vertical
        style={menuStyle}
      >
        <Menu.Item style={menuItemStyle} onClick={() => goTo("/")}>
          Home
        </Menu.Item>

        <Menu.Item style={menuItemStyle} onClick={() => goTo("/todos")}>
          Todos
        </Menu.Item>

        <Menu.Item style={menuItemStyle} onClick={() => goTo("/status")}>
          Completed
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarMenu;
