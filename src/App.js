import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Fetcher from "./containers/fetcher/fetcher";

class App extends Component {
  render() {
    return (
      <Layout>
        <Fetcher />
      </Layout>
    );
  }
}

export default App;
