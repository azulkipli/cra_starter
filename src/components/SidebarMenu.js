import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu } from "semantic-ui-react";

const menuItemStyle = {
  textAlign: "left"
};

class SidebarMenu extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.toggleVisibility();
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Sidebar
        as={Menu}
        id="sidebarMenu"
        animation="overlay"
        width="thin"
        visible={this.props.visible}
        icon="labeled"
        vertical
      >
        <Menu.Item
          style={menuItemStyle}
          as={Link}
          name="home"
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          style={menuItemStyle}
          as={Link}
          name="todos"
          to="todos"
          active={activeItem === "todos"}
          onClick={this.handleItemClick}
        >
          Todos
        </Menu.Item>

        <Menu.Item
          style={menuItemStyle}
          as={Link}
          name="status"
          to="status"
          active={activeItem === "status"}
          onClick={this.handleItemClick}
        >
          Completed
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarMenu;
