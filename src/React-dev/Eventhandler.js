import React from 'react'
import { useState } from 'react';
const Eventhandler = () => {
    const [count, setCount] =useState(20);
    const Increment=()=>{
        setCount(count + 1);
    }
    const Decrement=()=>{
        setCount(count-1);
    }
  return (
    <>
        <h1>Increment & Decrement </h1>
        <h2>Count value : {count}</h2>
        <button className='btn btn-primary' onClick={Increment}>Click {count} Times</button><br/>
        <button className='btn btn-danger' onClick={Decrement}>Click {count} Times</button>
    </>
  )
}

export default Eventhandler
