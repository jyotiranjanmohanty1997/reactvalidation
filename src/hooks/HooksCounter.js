import React,{useState, useEffect} from 'react'

export default function HooksCounter() {
    // const Name= useState("Wecome Mikun")
    //     const stateHandler=()=>{
    //     Name [1] ("Jyoti");
    

        // const Name= useState("Wecome Mikun")
        // const Fullname = Name[0];
        // const setFullname=Name[1];

        // const stateHandler=()=>{
        //     //Name [1] ("Jyoti");
        //     setFullname("Mikun");

        const[name, setname] = useState("Welcome Mikun");
        const [count,setcount]= useState("Click");
        const [counter,setcounter]=useState(0);
        const [counter1,setcounter1]=useState(15);

        const increment=()=>{
            setcounter (counter + 1);
        }
        const decrement=()=>{
            setcounter1 (counter1 - 1);
        }
        const incremented=()=>{
            for(let i=0;i<10;i++)
                setcounter (precount => precount +1);
        }

        const stateHandler=()=>{
            setname("King"); 
            setcount("200");
        }
    useEffect(()=>{
        console.log("welcome Jyoti");
    },[counter, counter1]);
  return (
    <div>
      <h1>{name}</h1>
       <h2>{count}</h2>
       <br/>
      <button className="btn btn-info" onClick={stateHandler} >Click Me</button><br/>
      <button className="btn btn-success" onClick={increment} >increment {counter}</button><br/>
      <button className="btn btn-danger" onClick={decrement} >decrement {counter1}</button><br/>
      <button className="btn btn-primary" onClick={incremented}>+10 increment {counter}</button><br/>
    </div>
  )
}
