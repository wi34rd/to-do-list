import React from 'react';


const ToDoAddForm = (props) => {
  return (
    <div className="col-12 mt-3">
      <button type="button" className="btn btn-primary" onClick={() => props.onToDoAdd('Drink Coffee')}>Add</button>
    </div>
  );
};

export default ToDoAddForm;
