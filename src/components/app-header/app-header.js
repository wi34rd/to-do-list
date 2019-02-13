import React from 'react';


const AppHeader = ({toDo, done}) => {
  return (
    <h1 className="row">
      <span className="col-12 col-md-6">To-Do List</span>
      <small className="col-12 col-md-6 text-muted text-md-right">{toDo} more to do, {done} done</small>
    </h1>
  );
};

export default AppHeader;
