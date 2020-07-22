import React from 'react';

const Task = props => {
    return (
        <div className="toDos-item">
            <h1><i>{props.toDo}</i></h1>
            <button onClick={props.remove}>Delete</button>
        </div>
    )
}

export default Task;