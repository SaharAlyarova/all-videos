import React from 'react'
import List from '../list par'
// import {uid} from 'react-uid';
const ListItemCom = ({Obj}) => {
  console.log(Obj)
  return (
    <div>
      <table>
        <thead>
            <tr>
              <th>ID</th>
               <th>Name</th>
               <th>UserName</th>
               <th>email</th> 
            </tr>
        </thead>
        <tbody>
            {
                Obj.map((element,index,arr)=>{
return <List key={element.id} element={element}/>
               
})

                }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListItemCom
