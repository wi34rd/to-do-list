import React from 'react';

import './to-do-list-item.css';


export default class ToDoListItem extends React.Component {
  render() {


    return (
      <div className="to-do-list-item d-flex">
        {React.createElement(this.props.isImportant ? 'strong': 'span', null, this.props.text)}

        <button type="button" className="btn btn-outline-danger btn-sm ml-auto">
          <span className="fa fa-trash-o"></span>
        </button>

        <button type="button" className="btn btn-outline-success btn-sm ml-1">
          <span className="fa fa-exclamation"></span>
        </button>
      </div>
    );
  };
}
