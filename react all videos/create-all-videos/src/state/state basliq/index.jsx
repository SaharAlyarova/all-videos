import React, { useState } from 'react'

const StateLearn = () => {
    const [fullname,setFullname]=useState("")
    const [show,setshow]=useState(true)
    const [skills,setskills]=useState()
    // console.log(skills)
  return (
    <div>
       {show && <h1>Full Name: {fullname}  </h1> }
       {show && <h1>Skills: {skills} {skills} </h1> }
       {/* <h3>{skills}</h3> */}
      <button onClick={()=>{
        setFullname("Sahar Alyarova");
        show ? setshow(false) : setshow(true);
        setskills(["a","b","c"])
      show ? setshow(false) : setshow(true);
     

      }}>Uptade Data</button>
    </div>
  )
}

export default StateLearn
