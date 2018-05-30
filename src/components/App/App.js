import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
import ROUTES from "../../constants";
import FeedbackForm from "../../containers/FeedbackForm";
import FeedbackList from "../../containers/FeedbackList";
import Home from "../Home";
import Notifier from "../../containers/Notifier";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <Navigation />
          <Notifier />
          <div className="App-content">
            <Switch>
              <Route exact path={ROUTES.home} component={Home} />
              <Route
                exact
                path={ROUTES.feedbackForm}
                component={FeedbackForm}
              />
              <Route
                exact
                path={ROUTES.feedbackList}
                component={FeedbackList}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
