import React from 'react'

function Inline() {
  const Heading={
    color:'blue',
    fontSize:'80px'
  }
  return (
    <div>
    <h1 className='error'>Error</h1>
      <h1 style={Heading}> Inline Css </h1>
    </div>
  )
}

export default Inline
