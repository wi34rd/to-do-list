import React from 'react';
import ReactDOM from 'react-dom';
import AppHeading from './components/app-heading';
import SearchPanel from './components/search-panel';
import ToDoList from './components/to-do-list';


const App = () => {
  return (
    <div>
      <AppHeading />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
