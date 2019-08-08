import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Fetcher from "./containers/fetcher/fetcher";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Fetcher} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
