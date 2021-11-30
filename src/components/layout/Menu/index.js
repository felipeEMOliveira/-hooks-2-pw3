import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu() {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li><Link to="/">Hooks</Link></li>
          <li><Link to="/UseState">useState()</Link></li>
          <li><Link to="/UseEffect">useEffect()</Link></li>
          <li><Link to="/UseContext">useContext()</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
