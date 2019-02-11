import React from 'react';

import ToDoListItem from './to-do-list-item';


const ToDoList = ({tasks}) => {
  const toDoListItems = tasks.map((task) => {
    return (
      <li className="list-group-item pl-5 pr-3 py-2" key={task.id}>
        <ToDoListItem text={task.text} isImportant={task.isImportant} />
      </li>
    )
  })

  return (
    <ul className="list-group">
      {toDoListItems}
    </ul>
  );
};

export default ToDoList;
