import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item';

// This method is only called once
ReactDOM.render(
  // Insert the itemsList component into the DOM
  <Item url="/api/v1/item/1/" />,
  document.getElementById('reactEntry'),
);