import React from 'react';
import ReactDOM from 'react-dom';


const elt = (
  <div>
    <h1>To-Do List</h1>
    <input placeholder="Search..." />

    <ul>
      <li>Learn React</li>
      <li>Make Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(elt, document.getElementById('app'));
