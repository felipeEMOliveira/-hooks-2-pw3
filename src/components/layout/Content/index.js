import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hooks from '../../../views/contents/Hooks';
import UseContext from '../../../views/contents/UseContext';
import UseEffect from '../../../views/contents/UseEffect';
import UseState from '../../../views/contents/UseState';
import NotFound from '../../../views/contents/NotFound';

import './styles.css';

function Content() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Hooks />
        </Route>
        <Route path="/useState">
          <UseState />
        </Route>
        <Route path="/UseEffect">
          <UseEffect />
        </Route>
        <Route path="/UseContext">
          <UseContext />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
