import React from 'react';
import ReactDOM from 'react-dom';

import AppHeading from './components/app-heading';
import SearchInput from './components/search-input';
import TaskFilter from './components/task-filter';
import ToDoList from './components/to-do-list';


const App = () => {
  const tasks = [
    {text: 'Learn React', isImportant: true, id: 1},
    {text: 'Make Awesome App', isImportant: true, id: 2},
    {text: 'Have a lunch', isImportant: false, id: 3}
  ];

  return (
    <div>
      <AppHeading toDo="3" done="1" />

      <div className="my-3 d-flex">
        <SearchInput />
        <TaskFilter />
      </div>

      <ToDoList tasks={tasks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('to-do-list-app'));
