import React from 'react'

function Props(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.img} alt='photo_img'/>
      <p>{props.email}</p>
    </>
  );
}


export default Props;
