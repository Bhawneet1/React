import { useState } from 'react'//hooks come from here
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState-> to change the state
  //usestate returns a variable and a function in an array
  //ab update kai baad saari jagha update
  let [counter ,setCounter]=useState(15)
  //let counter=15
  const addValue =()=>{
    // console.log("Clicked",counter);
    //here value is increasing
    counter=counter+1
    if(counter>20)
    {
      console.log("can't go above ");
      
    }else{
      setCounter(counter)
    }
    
    //Change in UI will be handled by React using hooks
    //to sync state and UI
  }
  const removeValue =()=>{
    counter =counter -1
    if(counter<0){
      console.log("Can't change");
      
    }else{
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value:{counter}</button>
      {/* the value is not reflecting here */}
      <br />
      <button onClick={removeValue}>remove value :{counter} </button>
    </>
  )
}

export default App
