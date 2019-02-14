import React from 'react';

import AppHeader from '../app-header/';
import ToDoSearch from '../to-do-search/';
import ToDoFilter from '../to-do-filter/';
import ToDoList from '../to-do-list/';
import ToDoAddForm from '../to-do-add-form/';


export default class App extends React.Component {
  toDoMaxId = 0;

  state = {
    toDos: [
      this.createToDo('Learn React'),
      this.createToDo('Make Awesome App'),
      this.createToDo('Have a lunch')
    ]
  };

  createToDo(text) {
    return {
      id: ++this.toDoMaxId,
      text,
      isDone: false,
      isImportant: false
    }
  }

  toDoAdd = (toDoText) => {
    this.setState({
      toDos: this.state.toDos.concat(this.createToDo(toDoText))
    });
  };

  toDoDelete = (itemId) => {
    this.setState({
      toDos: this.state.toDos.filter((elt) => elt.id !== itemId)
    });
  };

  toDoToggleProp(propName, itemId) {
    return this.state.toDos.map((toDo) => {
      if (toDo.id === itemId) {
        toDo[propName] = !toDo[propName];
      }

      return toDo;
    });
  }

  toDoToggleDone = (itemId) => {
    this.setState({toDos: this.toDoToggleProp('isDone', itemId)});
  };

  toDoToggleImportant = (itemId) => {
    this.setState({toDos: this.toDoToggleProp('isImportant', itemId)});
  };

  render() {
    const {toDos} = this.state;
    const doneCnt = toDos.filter((toDo) => toDo.isDone).length
    const toDoCnt = toDos.length - doneCnt;

    return (
      <div className="container pt-4">
        <AppHeader toDo={toDoCnt} done={doneCnt} />

        <div className="row my-3">
          <ToDoSearch />
          <ToDoFilter />
        </div>

        <div className="row">
          <ToDoList
            toDos={toDos}
            onToDoDelete={this.toDoDelete}
            onToDoToggleDone={this.toDoToggleDone}
            onToDoToggleImportant={this.toDoToggleImportant}
          />
        </div>

        <div className="row">
          <ToDoAddForm onToDoAdd={this.toDoAdd} />
        </div>
      </div>
    );
  }
};
