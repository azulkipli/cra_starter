import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { observer, inject } from "mobx-react";
import logo from "../logo.png";

const menuStyle = {
  marginBottom: "0px",
  borderRadius: "0px",
  borderBottom: "none"
};

@inject("notification")
@observer
class Navheader extends Component {
  render() {
    const { visible, toggleSidebarMenu, goTo } = this.props;
    return (
      <Menu style={menuStyle} borderless fluid width={3}>
        <Menu.Menu position="left">
          <Menu.Item
            style={{ width: "50px" }}
            icon={visible ? <Icon name="x" size="large" /> : <Icon name="bars" size="large" />}
            onClick={() => toggleSidebarMenu()}
          />
        </Menu.Menu>

        <Menu.Item onClick={() => goTo("/")}>
          <img src={logo} alt="logo" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item icon={<Icon name="help circle outline" size="large" />} onClick={() => toggleSidebarMenu()} />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navheader;
