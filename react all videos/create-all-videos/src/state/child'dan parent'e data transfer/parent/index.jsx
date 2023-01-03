import React, { useState } from 'react'
import ChildCom from '../child'

const ParentCom = () => {
    const [data,setdata]=useState()
    const tersfunk=(shr)=>{
        console.log(shr)
       setdata(shr)
       
    }
    // tersfunk()
  return (
    <div>
      <ChildCom tersfunk={tersfunk}/>
      <h1>{data}</h1>
    </div>
  )
}

export default ParentCom
