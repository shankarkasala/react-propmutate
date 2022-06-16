import React,{useState} from "react";
import "./style.css";
import Child from './Child'
export default function App() {
const [name,setName]=useState("Shankar")
const changeName=(data)=>{
  setName(data)
}
  return (
    <div>
      <Child name={name} change={changeName}/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
