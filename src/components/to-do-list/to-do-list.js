import React from 'react';

import ToDoListItem from '../to-do-list-item/';


const ToDoList = (props) => {
  const toDoListItems = props.toDos.map((toDo) => {
    return (
      <li className="list-group-item pl-5 pr-3 py-2" key={toDo.id}>
        <ToDoListItem
          text={toDo.text}
          isDone={toDo.isDone}
          isImportant={toDo.isImportant}
          onToDoDelete={() => props.onToDoDelete(toDo.id)}
          onToDoToggleDone={() => props.onToDoToggleDone(toDo.id)}
          onToDoToggleImportant={() => props.onToDoToggleImportant(toDo.id)}
        />
      </li>
    )
  })

  return (
    <div className="col-12">
      <ul className="list-group">
        {toDoListItems}
      </ul>
    </div>
  );
};

export default ToDoList;
