import React from 'react';

const ToDo = props => {
    return (
        <div className="toDo-div">
            <h3>{props.toDo}</h3>
            <button type="button">Delete</button>
        </div>
    )
}

export default ToDo;