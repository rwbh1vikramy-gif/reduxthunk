import React, { useCallback, useState } from "react"

let Child= React.memo(function({obj}){

console.log("child rendered",obj)
return (
<>
<h1>jkghjk</h1>
</>

)
})
export function Usecallbackf(){

let [count,setcount]=useState(0)
// let [v,setv]=useState(true)

let obj= useCallback(()=>{
    return {
        name:"jkhjk"
    }
},[])

    return (
<>
<h1>count:{count}</h1>

{/* {v && <Child obj={obj}/>} */}

<Child obj={obj}/>
<button onClick={()=>setcount(count+1)}>increase</button>
</>

    )
}