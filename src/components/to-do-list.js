import React from 'react';
import ToDoListItem from './to-do-list-item';


const ToDoList = ({tasks}) => {
  const toDoListItems = tasks.map((task) => {
    return (
      <li>
        <ToDoListItem text={task.text} important={task.isImportant} />
      </li>
    )
  })

  return (
    <ul>
      {toDoListItems}
    </ul>
  );
};

export default ToDoList;
