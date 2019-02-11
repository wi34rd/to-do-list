import React from 'react';
import ToDoListItem from './to-do-list-item';


const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem text="Learn React" />
      </li>

      <li>
        <ToDoListItem text="Make Awesome App" important />
      </li>
    </ul>
  );
};

export default ToDoList;
