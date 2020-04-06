import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import routes from '../constants/routes.json';
import { Store } from '../store';
import HomePage from './HomePage';
import CounterPage from './CounterPage';
import TopologyPage from './TopologyPage';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.TOPOLOGY} component={TopologyPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
