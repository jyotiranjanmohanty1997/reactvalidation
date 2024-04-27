import React from 'react'
import './Style.css';
function Stylesheet(props) {
  let className = props.isvalue ? 'demo' : 'demo1';
    return (
    <div>
      <h1 className={`${className} demo3 `}> Hello Stylesheet </h1>
    </div>
  )
}

export default Stylesheet
