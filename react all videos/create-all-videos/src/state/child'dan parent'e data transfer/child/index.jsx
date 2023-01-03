import React from 'react'

const ChildCom = ({tersfunk}) => {
    let text="Sahar Alyarova"
  return (
    <div>
      <button onClick={()=>tersfunk(text)


      }>click</button>
    </div>
  )
}

export default ChildCom
