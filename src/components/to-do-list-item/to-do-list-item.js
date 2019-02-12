import React from 'react';

import './to-do-list-item.css';


export default class ToDoListItem extends React.Component {
  state = {
    done: false
  };

  toDoListItemClick = () => {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    return (
      <div className="to-do-list-item d-flex">
        {React.createElement(
          this.props.isImportant ? 'strong': 'span',
          {
            className: 'to-do-list-item-text',
            onClick: this.toDoListItemClick
          },
          this.state.done ? <del>{this.props.text}</del> : this.props.text
        )}

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
