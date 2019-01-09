import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Feed from "./components/main_page/feed";
import NotFound from "./components/notFound";
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route to="/" component={Feed} />
          <Route to="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
