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
          <Route path="/feed" component={Feed} />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" exact to="/feed" />
          <Redirect to="/notFound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
