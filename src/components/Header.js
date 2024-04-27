
import React from 'react';

const Header =(props)=>{
    console.log(props);
    return(
       <>
            <h1>Functional Components</h1>
            <h2>Hello {props.first}  {props.last} </h2>
            {props.children}
            
       </> 
    )
}

export default Header;

