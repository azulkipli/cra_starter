import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("notification")
@observer
class Home extends Component {
  state = {};

  componentDidMount = () => {
    // const { Notification } = this.props;
    // set(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95)
    this.props.notification.set("Welcome!", "Create React App Rewired Mobx", true, 3000, "info");
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    console.log("props nih:", this.props);
    const { activeItem } = this.state;
    return (
      <div className="component">
        <Header className="title" textAlign="center">
          Beli pulsa gratis bitcoin gan!
        </Header>

        <Grid columns="equal" divided inverted padded>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="dashboard" size="huge" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="help" size="huge" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="heartbeat" size="huge" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="protect" size="huge" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="shopping basket" size="huge" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="recycle" size="huge" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="calendar" size="huge" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="erase" size="huge" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
