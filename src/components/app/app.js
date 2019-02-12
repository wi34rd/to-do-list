import React from 'react';

import AppHeading from '../app-heading/';
import SearchInput from '../search-input/';
import TaskFilter from '../task-filter/';
import ToDoList from '../to-do-list/';


export default class App extends React.Component {
  state = {
    tasks: [
      {text: 'Learn React', isImportant: true, id: 1},
      {text: 'Make Awesome App', isImportant: true, id: 2},
      {text: 'Have a lunch', isImportant: false, id: 3}
    ]
  };

  toDoListItemDelete = (itemId) => {
    this.setState((state) => {
      return {
        tasks: state.tasks.filter((elt) => elt.id !== itemId)
      };
    });
  };

  render() {
    return (
      <div className="container pt-4">
        <AppHeading toDo="3" done="1" />

        <div className="row my-3">
          <SearchInput />
          <TaskFilter />
        </div>

        <div className="row">
          <ToDoList tasks={this.state.tasks} onItemDelete={this.toDoListItemDelete} />
        </div>
      </div>
    );
  }
};
