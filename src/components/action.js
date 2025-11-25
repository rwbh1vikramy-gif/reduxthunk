import { FETCHFAILED, FETCHLOADING, FETCHSUCCESS } from "./actiontype";



export function fetchloading(){
return {
    type:FETCHLOADING
}
}

export function fetchsuccess(data){
return {
    type:FETCHSUCCESS,
    payload:data
}
}
export function fetchfailed(data){
return {
    type:FETCHFAILED,
    payload:data
}
}




export  function Fetchdata(){
return async (dispatch)=>{
    try{
dispatch(fetchloading())

let data=await fetch("https://fakestoreapi.com/products")
let res= await data.json();
console.log(res)
dispatch(fetchsuccess(res))

}catch(e){
dispatch(fetchfailed(e.message))
}
}
}







// export async function Fetchdata(){
// try{
// dispatch({type:"FETCHLOADING"})

// let data=await fetch("https://fakestoreapi.com/products")
// let res= await data.json();

// dispatch({type:"FETCHSUCCESS", payload:res})

// }catch(e){
// dispatch({type:"FETCHFAILED", payload:e.message})

// }

// }