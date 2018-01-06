import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { observer, inject } from "mobx-react";
import logo37 from "../logo37.png";

const menuStyle = {
  marginBottom: "0px",
  borderRadius: "0px",
  borderBottom: "none"
};

const logoWrapper = {
  padding: "5px 0 0 0"
};

@inject("gui")
@observer
class Navheader extends Component {
  render() {
    const { gui, goTo } = this.props;
    const visible = gui.sidebarMenuVisible;
    return (
      <Menu style={menuStyle} borderless fluid width={3}>
        <Menu.Menu position="left">
          <Menu.Item
            style={{ width: "50px" }}
            icon={visible ? <Icon name="x" size="large" /> : <Icon name="bars" size="large" />}
            onClick={() => gui.toggleSidebarMenu()}
          />
        </Menu.Menu>

        <div style={logoWrapper}>
          <img src={logo37} alt="logo" width="37px" height="37px" onClick={() => goTo("/")} />
        </div>

        <Menu.Menu position="right">
          <Menu.Item icon={<Icon name="help circle outline" size="large" />} onClick={() => goTo("/help")} />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navheader;
