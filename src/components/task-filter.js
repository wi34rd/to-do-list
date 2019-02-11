import React from 'react';


const TaskFilter = () => {
  return (
    <div className="btn-group ml-1">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-info">Active</button>
      <button type="button" className="btn btn-outline-info">Done</button>
    </div>
  );
};

export default TaskFilter;
