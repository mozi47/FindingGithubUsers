import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/users/Users";
import Search from "./component/users/Search";
import Alert from "./component/layout/Alert";
import About from "./component/layout/About";
import User from "./component/users/User";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import notFound from "./component/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={notFound} />
            </Switch>
          </div>
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
