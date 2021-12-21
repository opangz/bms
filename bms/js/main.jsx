import React from 'react';
import ReactDOM from 'react-dom';
import LeftDrawer from './left_drawer';
import Dashboard from './dashboard';

// This method is only called once
ReactDOM.render(
  // Insert a component into the DOM
    <Dashboard />,
    document.getElementById('reactEntry')
);
