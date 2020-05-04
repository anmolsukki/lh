import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;

const DefaultLayout = Loadable({
  loader: () => import('./Containers'),
  loading
});

class App extends Component {
  render() {
    return (
      <main id="main">
        <HashRouter>
          <Switch>
            <Route path="/" name="Main" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default App;
