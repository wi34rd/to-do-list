import React from 'react';
import ReactDOM from 'react-dom';
import AppHeading from './components/app-heading';
import SearchPanel from './components/search-panel';
import ToDoList from './components/to-do-list';


const App = () => {
  const tasks = [
    {text: 'Learn React', isImportant: true, id: 1},
    {text: 'Make Awesome App', isImportant: true, id: 2},
    {text: 'Have a lunch', isImportant: false, id: 3}
  ];

  return (
    <div>
      <AppHeading />
      <SearchPanel />
      <ToDoList tasks={tasks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
