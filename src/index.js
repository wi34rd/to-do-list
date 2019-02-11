import React from 'react';
import ReactDOM from 'react-dom';


const AppHeading = () => <h1>To-Do List</h1>;

const SearchPanel = () => <input placeholder="Search" />;

const ToDoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Make Awesome App</li>
    </ul>
  );
};

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
