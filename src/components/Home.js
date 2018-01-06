import React, { Component } from "react";
import { Header, Grid, Button, Icon } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
class Home extends Component {
  showAlert = type => {
    const { gui } = this.props;
    // openAlert(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95)
    gui.openAlert(
      "Welcome: " + type + "!",
      "Use react-hot-reload, mobx etc without eject with react-app-rewired",
      true,
      5000,
      type
    );
  };

  render() {
    return (
      <div className="ui container">
        <Header className="title" textAlign="center">
          Home tagline here!
        </Header>

        <Grid columns="equal" divided padded>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button basic icon={<Icon name="dashboard" size="big" />} role="button" aria-label="dashboard" />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button
                basic
                icon={<Icon name="help" size="big" />}
                role="button"
                aria-label="help"
                onClick={() => this.props.history.push("/help")}
              />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button basic icon={<Icon name="heartbeat" size="big" />} role="button" aria-label="heartbeat" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button basic role="button" aria-label="recycle" circular icon={<Icon name="recycle" size="big" />} />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button
                basic
                role="button"
                aria-label="calendar"
                circular
                icon={<Icon name="snowflake outline" size="big" />}
              />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button basic role="button" aria-label="erase" circular icon={<Icon name="erase" size="big" />} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign="center">
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button
                basic
                icon={<Icon name="info circle" size="big" color="teal" />}
                role="button"
                aria-label="info"
                onClick={() => this.showAlert("info")}
              />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button
                basic
                icon={<Icon name="warning circle" size="big" color="brown" />}
                role="button"
                aria-label="warning"
                onClick={() => this.showAlert("warning")}
              />
            </Grid.Column>
            <Grid.Column style={{ boxShadow: "none" }}>
              <Button
                basic
                icon={<Icon name="warning sign" size="big" color="red" />}
                role="button"
                aria-label="error"
                onClick={() => this.showAlert("error")}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
