import React from 'react';
import ReactDOM from 'react-dom';
import AppHeading from './components/app-heading';
import SearchPanel from './components/search-panel';
import ToDoList from './components/to-do-list';


const App = () => {
  const tasks = [
    {text: 'Learn React', isImportant: true},
    {text: 'Make Awesome App', isImportant: true},
    {text: 'Have a lunch', isImportant: false}
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
