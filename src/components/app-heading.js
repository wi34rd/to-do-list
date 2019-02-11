import React from 'react';

import './app-heading.css'


const AppHeading = ({toDo, done}) => {
  return (
    <div class="app-heading d-flex">
      <h1>To-Do List</h1>
      <span>{toDo} more to do, {done} done</span>
    </div>
  );
};

export default AppHeading;
