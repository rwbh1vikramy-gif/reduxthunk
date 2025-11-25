import { useEffect} from "react"
// import { reducer } from "./reducer"
import { Fetchdata} from "./action"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';

// import { Fetchdata, fetchfailed, fetchloading, fetchsuccess } from "./action"
// import { FETCHFAILED, FETCHLOADING, FETCHSUCCESS } from "./actiontype"

// export let initialstate={
//     data:[],
//     filtereddata:[],
//     loading:false,
//     error:""
// }




export function Advancedstatemanage(){
    let dispatch = useDispatch()

let state1= useSelector((state)=>state)

useEffect(()=>{
dispatch(Fetchdata())

},[dispatch])

console.log("this is advancedstate manage ment",state1.data)



    return (

<>

<h1>Redux thunk lecture</h1>

 {state1.data.map((v,i)=>{
return (
    <div key={i}>
<h1>{v.category}</h1>
<p>{v.description}</p>
<p>{v.price}</p>
    </div>
)
})} 



</>

    )
}