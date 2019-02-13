import React from 'react';

import './to-do-list-item.css';


export default class ToDoListItem extends React.Component {
  state = {
    isDone: false,
    isImportant: this.props.isImportant
  };

  toDoMakeDone = () => {
    this.setState((state) => {
      return {
        isDone: !state.isDone
      };
    });
  };

  toDoMakeImportant = () => {
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
        <div className="to-do-list-item__text" onClick={this.toDoMakeDone}>
          {text}
        </div>

        <button type="button" className="btn btn-outline-danger btn-sm ml-auto" onClick={this.props.onToDoDelete}>
          <span className="fa fa-trash-o"></span>
        </button>

        <button type="button" className="btn btn-outline-success btn-sm ml-1" onClick={this.toDoMakeImportant}>
          <span className="fa fa-exclamation"></span>
        </button>
      </div>
    );
  };
}
