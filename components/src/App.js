import React, { useState } from 'react';
import './App.css';
import './ToDo/ToDo'
import Task from './ToDo/ToDo';

function App() {
  const [tasks, setTasks] = useState([
    { toDo: 'Buy Milk', id: 'a1' },
    { toDo: 'Drink', id: 'a2' },
    { toDo: 'Play', id: 'a3' },
    { toDo: 'Swim', id: 'a4' },
    { toDo: 'Code', id: 'a5' },
    { toDo: 'Stydy', id: 'a6' },
  ]);

  const removeTasks = id => {
    const index = tasks.findIndex(td => td.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);

    setTasks(tasksCopy);
  }

  const addNewTask = () => {
    const tasksCopy = [...tasks];
    const input = document.querySelector('input');
    const inpValue = input.value;
    const upperCasedInpVal = inpValue.charAt(0).toUpperCase() + inpValue.slice(1);

    let date = new Date;
    let day = date.getDay().toString();
    let year = date.getFullYear();
    let sec = date.getSeconds();
    let milSec = date.getMilliseconds();
    let idDate = day + year + sec + milSec;

    tasksCopy.push({
      toDo: upperCasedInpVal,
      id: idDate
    })
    console.log(tasksCopy);
    setTasks(tasksCopy);
  }

  let tasksList = tasks.map(task => {
    return (
      <Task className="person"
        key={task.id}
        toDo={task.toDo}
        remove={() => removeTasks(task.id)} />
    )
  })

  return (
    <div className="App">
      <input type="text" placeholder="To Do" />
      <button id="add" type="button" onClick={addNewTask}>Add</button>
      <div className="toDos-div">
        {tasksList}
      </div>

    </div>
  );
}

export default App;
