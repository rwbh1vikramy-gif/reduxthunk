import { useMemo, useState } from "react"

function greet(){

    let sum=0;
    for(let i=0; i<1000000000; i++){
        sum += i
    }
return sum
}

export function Usememof(){
let [theme,settheme]=useState("white")

let value= useMemo(()=>greet(),[])



    return (

<>
<h1>value:{value}</h1>
<button  onClick={()=>settheme((pre)=>pre=="dark"?"white":"dark")}>Changetheme</button>

<div style={{backgroundColor:theme=="dark"?"blue":"white", height:"100vh"}}>adfads</div>
</>

    )
}