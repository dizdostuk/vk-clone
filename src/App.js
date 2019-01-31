import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import "./App.css";
import NavbarLeft from "./components/navbarLeft";
import Feed from "./components/main_page/feed";
import Messages from "./components/messages/messages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page_wrap" style={{ width: "100%" }}>
          <div className="page_layout">
            <NavbarLeft />
            <Switch>
              <Route path="/feed" component={Feed} />
              <Route path="/messages" component={Messages} />
              <Route path="/notFound" component={NotFound} />
              <Redirect from="/" exact to="/feed" />
              <Redirect to="/notFound" />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
