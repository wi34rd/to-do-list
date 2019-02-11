import React from 'react';

import './to-do-list-item.css';


const ToDoListItem = ({text, isImportant = false}) => {
  return (
    <div className="to-do-list-item d-flex">
      {React.createElement(isImportant ? 'strong': 'span', null, text)}

      <button type="button" className="btn btn-outline-danger btn-sm ml-auto">
        <span className="fa fa-trash-o"></span>
      </button>

      <button type="button" className="btn btn-outline-success btn-sm ml-1">
        <span className="fa fa-exclamation"></span>
      </button>
    </div>
  );
};

export default ToDoListItem;
