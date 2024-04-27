import React,{useState} from 'react'

export default function HookObject() {
    const [name,setName] =useState({firstname:'',lastname:''});
  return (
    <div>
      <form>
        <input type='text' value={name.firstname} onChange={obj=>{setName({...name,firstname:obj.target.value})}}/>
        <input type='text' value={name.lastname} onChange={obj=>{setName({...name,lastname:obj.target.value})}}/>
      </form>
      {name.firstname}
      {name.lastname}
      {JSON.stringify}
    </div>
  )
}
