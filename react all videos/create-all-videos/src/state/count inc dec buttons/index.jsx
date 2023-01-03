import React, { useState } from 'react'

const Increment = ({count,setCount}) => {
    
  return (
    <div>
      <button onClick={()=>{
        count+=1
        setCount(count)
      }}>Inc</button>
     
    </div>
  )
}

export default Increment
