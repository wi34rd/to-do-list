import React from 'react';

import './to-do-list-item.css';


export default class ToDoListItem extends React.Component {
  state = {
    isDone: false,
    isImportant: this.props.isImportant
  };

  toDoListItemClick = () => {
    this.setState((state) => {
      return {
        isDone: !state.isDone
      };
    });
  };

  toDoListItemMarkImportant = () => {
    this.setState((state) => {
      return {
        isImportant: !state.isImportant
      };
    });
  };

  render() {
    let text = this.props.text;
    this.state.isDone && (text = <del>{text}</del>);
    this.state.isImportant && (text = <strong>{text}</strong>);

    return (
      <div className="to-do-list-item d-flex">
        <div onClick={this.toDoListItemClick}>
          {text}
        </div>

        <button type="button" className="btn btn-outline-danger btn-sm ml-auto" onClick={this.props.onDelete}>
          <span className="fa fa-trash-o"></span>
        </button>

        <button type="button" className="btn btn-outline-success btn-sm ml-1" onClick={this.toDoListItemMarkImportant}>
          <span className="fa fa-exclamation"></span>
        </button>
      </div>
    );
  };
}
