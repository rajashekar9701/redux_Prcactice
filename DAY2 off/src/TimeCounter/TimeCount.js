import React from 'react'
import { useState,useEffect ,useRef} from 'react'
const TimeCount = () => {
    const[count,setCount]=useState(0);
    const [timeLeft,setTimeLeft]=useState(10);

    const id=useRef(null);
    const clear=()=>window.clearInterval(id.current);
   useEffect(()=>{
    id.current=window.setInterval(()=>{
       setTimeLeft((time)=>time-1)
    },1000)
    return clear;
   },[])
   useEffect(()=>{
    if(timeLeft===0){
        clear()
    }
   },[timeLeft])

  return (
    <div style={{color:"Black"}} className="App">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : 
        <button onClick={() => setCount((c) => c + 1)}>
          +
        </button>}
    </div>
    
  )
}

export default TimeCount