import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../dashboard/dashboard.jsx';
import Item from './item.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <Item url='/api/v1/items/1/'/>,
  document.getElementById('reactEntry')
);