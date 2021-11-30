import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import Store from '../data/Store';

import './styles.css';

function App() {
  return (
    <Store>
      <div className="app">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </Store>
  );
}

export default App;
