import React, { useState } from 'react'
import forest from "../assets/forest.jpeg"
export default function Contact() {
  const[input,setInput]=useState('')
  return (
    <div>
      Feedback:<input type="text" onChange={

        (e)=>setInput(e.target.value)
        
        }/>
      <h1><b> {input}</b></h1>
    </div>
  )
}
