import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {AppWrapper} from './containers/AppWrapper';
import {App} from './containers/App';
import { AppStore, RouterStore } from './stores';



// enable MobX strict mode
useStrict(true);

// prepare MobX stores
const appStore = new AppStore();
const routerStore = new RouterStore(browserHistory);
const rootStores = {
  'app': appStore,
  'router': routerStore
};

// render react DOM
ReactDOM.render(
  <Provider {...rootStores} >
      <Router history={browserHistory} >
        <Route path='/' component={AppWrapper} >
          <IndexRoute component={App} />
        </Route>
      </Router>
    </Provider >
  ,
  document.getElementById('root')
);