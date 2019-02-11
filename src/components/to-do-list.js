import React from 'react';
import ToDoListItem from './to-do-list-item';


const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem />
      </li>

      <li>
        <ToDoListItem />
      </li>
    </ul>
  );
};

export default ToDoList;
