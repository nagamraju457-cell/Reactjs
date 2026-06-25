import { useState } from "react"

export default function Home() {
    const [count, setCount]=useState(0)
    
    const pos = ()=>{
        setCount(prev => prev+1)
    }
        
    const neg = () =>{
        if(count>0){
        setCount(prev => prev-1)
        }
    }
    return(
       <div> 
        <h1>{count}</h1>
        <button onClick={pos}>+</button><br />
        <button onClick={neg}>-</button><br />
       </div>
    )
}
