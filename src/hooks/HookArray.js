import React,{useState} from 'react'

export default function HookArray() {
    const [items,newItems] = useState([]);
    const addItem=()=>{
        newItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ul>
        {
            items.map((item => {<li key={item.value}>{item.value}</li>}))
        }
      </ul>
    </div>
  )
}
