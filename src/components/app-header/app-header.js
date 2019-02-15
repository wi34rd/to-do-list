import React from 'react';


export default class AppHeader extends React.Component {
  render() {
    return (
      <h1 className="row">
        <span className="col-12 col-md-6">To-Do List</span>
        <small className="col-12 col-md-6 text-muted text-md-right">{this.props.toDo} more to do, {this.props.done} done</small>
      </h1>
    );
  }
};
