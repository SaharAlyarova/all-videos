import React from 'react'

const Decrement = ({count,setCount}) => {
    
  return (
    <div>
      salam
      <button onClick={()=>{
       setCount(count-=1)
      }}>Decrement</button>
    </div>
  )
}

export default Decrement
