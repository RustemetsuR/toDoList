import React, { useState } from 'react';
import './App.css';
import './ToDo/ToDo';
import ToDo from './ToDo/ToDo';

function App() {
  const [tasks, setTasks] = useState([
    { toDo: 'Buy Milk', id:'a1'},
    { toDo: 'Drink', id:'a2'},
    { toDo: 'Play', id:'a3'},
    { toDo: 'Swim', id:'a4'},
    { toDo: 'Code', id:'a5'},
    { toDo: 'Stydy', id:'a6'},
  ])

  return (
    <div className="App">
      <input />
      <button>Add</button>

    </div>
  );
}

export default App;
