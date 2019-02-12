import React from 'react';


export default class TaskFilter extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-3 btn-group">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-outline-info">Active</button>
        <button type="button" className="btn btn-outline-info">Done</button>
      </div>
    );
  }
};
