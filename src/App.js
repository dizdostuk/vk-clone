import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Feed from "./components/main_page/feed";
import './App.css';
import "normalize.css/normalize.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route to="/" component={Feed} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
