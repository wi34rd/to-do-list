import React from 'react';

import AppHeader from '../app-header/';
import ToDoSearch from '../to-do-search/';
import ToDoFilter from '../to-do-filter/';
import ToDoList from '../to-do-list/';
import ToDoAddForm from '../to-do-add-form/';


export default class App extends React.Component {
  state = {
    toDos: [
      {id: 1, text: 'Learn React', isImportant: true},
      {id: 2, text: 'Make Awesome App', isImportant: true},
      {id: 3, text: 'Have a lunch', isImportant: false}
    ]
  };

  maxId = Math.max(...this.state.toDos.map((toDo) => toDo.id));

  toDoDelete = (itemId) => {
    this.setState((state) => {
      return {
        toDos: state.toDos.filter((elt) => elt.id !== itemId)
      };
    });
  };

  toDoAdd = (toDoText) => {
    this.setState((state) => {
      return {
        toDos: state.toDos.concat({id: ++this.maxId, text: toDoText, isImportant: false})
      };
    });
  };

  render() {
    return (
      <div className="container pt-4">
        <AppHeader toDo="3" done="1" />

        <div className="row my-3">
          <ToDoSearch />
          <ToDoFilter />
        </div>

        <div className="row">
          <ToDoList toDos={this.state.toDos} onToDoDelete={this.toDoDelete} />
        </div>

        <div className="row">
          <ToDoAddForm onToDoAdd={this.toDoAdd} />
        </div>
      </div>
    );
  }
};
