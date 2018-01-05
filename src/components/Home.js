import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("notification")
@observer
class Home extends Component {
  componentDidMount = () => {
    const { notification } = this.props;
    // set(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95)
    notification.set(
      "Welcome Home!",
      "Use react-hot-reload, mobx etc without eject with react-app-rewired",
      true,
      3000,
      "info"
    );
  };

  render() {
    return (
      <div className="component">
        <Header className="title" textAlign="center">
          Beli pulsa gratis bitcoin gan!
        </Header>

        <Grid columns="equal" divided inverted padded>
          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="dashboard" role="button" size="huge" aria-label="dashboard" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="help" size="huge" role="button" aria-label="help" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="heartbeat" size="huge" role="button" aria-label="heartbeat" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="protect" size="huge" role="button" aria-label="protect" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="shopping basket" size="huge" role="button" aria-label="shopping basket" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column>
              <Button basic icon="recycle" size="huge" role="button" aria-label="recycle" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="calendar" size="huge" role="button" aria-label="calendar" />
            </Grid.Column>
            <Grid.Column>
              <Button basic icon="erase" size="huge" role="button" aria-label="erase" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
