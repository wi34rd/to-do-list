import React from 'react';


const ToDoListItem = ({text, important = false}) => {
  return React.createElement(important ? 'strong': 'span', null, text);
};

export default ToDoListItem;
