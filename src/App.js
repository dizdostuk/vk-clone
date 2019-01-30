import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import './App.css';
import NavbarLeft from './components/navbarLeft';
import RenderMainComponent from './components/renderMainComponent';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page_wrap" style={{width: "100%"}}>
          <div className="page_layout">
            <NavbarLeft />
            <RenderMainComponent />
          </div>
        </div>
        
        <Switch>
          <Route path="/feed" />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" exact to="/feed" />
          <Redirect to="/notFound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
