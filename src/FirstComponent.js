import React from'react'
import { useState } from 'react';

function FirstComponent() {
    const [counter, setCounter] = useState(0)

    function handleAdd() {
        setCounter(counter +1)

    }
    function handleDelete() {
        setCounter(counter -1)

    }
return(
    <div> 
        <h2>First component</h2>
        <h2> Counter Value: {counter} </h2>
        <button onClick = {handleAdd}> Increase </button>
        <button onClick = {handleDelete}> Decrease </button>
    </div>
)
}

export default FirstComponent;