// import React, { useState } from 'react'

// const CalCulateCom = () => {
//     const [count, setcount] = useState("")
//     const [result, setresult] = useState("")
//     const [display, setdisplay] = useState("")
//     let arr=[0,1,2,3,4,5,6,7,8,9]
    
//   return (
//     <div>
//         <p>Count- {count}</p>
//         <p>Result-{result}</p>

//         <div>
//   {
//     arr.map((element,i)=>{
//         return <button key={i} onClick={(e)=>{
//             setcount(count+ e.target.innerText)
//         }}>{element}</button>
//     })
//   }
// </div>
// <div>
//     <button onClick={(e)=>{
//             setcount(count+ e.target.innerText)
//         }}>+</button>
//     <button onClick={(e)=>{
//             setcount(count+ e.target.innerText)
//         }}>-</button>
//     <button onClick={(e)=>{
//             setcount(count+ e.target.innerText)
//         }}>*</button>
//     <button onClick={(e)=>{
//             setcount(count+ e.target.innerText)
//         }}>/</button>
//     <button onClick={()=>{
//         let customNumber=""
//         let arrNumber=[]
//         count.split("")
//         // arrNumber.push(customNumber)
//         //    let sum=arrNumber[0];

//         //    arrNumber.forEach((elem,i)=>{
// // if(elem!="+"){
// //     customNumber+=elem
// // }
// // else{
// //     arrNumber.push(customNumber)
    
// //     customNumber=""
//     // console.log(customNumber)
    
//     count.split("").forEach((el,i) => {
//         if(el=="+"){
//             sum+= +arrNumber[i+1]
//             setresult(sum)
//                        }
//                        else if(el=="-"){
//                         sum-= +arrNumber[i+1]
//             setresult(sum)
//                        }
//                        else if(el=="*"){
//                         sum*= +arrNumber[i+1]
//             setresult(sum)
//                        }
//                        else if(el=="/"){
//                         sum/= +arrNumber[i+1]
//             setresult(sum)
//                        }
            
//     });
// }
//         //    })





         
          
//             // arrNumber.push(customNumber)
        
//             >=</button>
// </div>
//     </div>
// //   )
// // }

// export default CalCulateCom
