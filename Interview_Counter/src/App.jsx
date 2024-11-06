import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  function addVal(){
    //set counter mai callback accept karta hai
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    //value always increment by 1 if we write 10 times also
    //batch banega to same hi kaam hai to ik baar hi increment

    //agar 4 baar karna hai to
    setCount(prevCount=>prevCount+1)//prevcount means previos state ki value
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
  }
  function removeVal(){
    
    setCount(count-1)
  }
  return (
    <>
      <h1>Counter:  {count}</h1>
      <button onClick={addVal}>Add Value: {count}</button>
      <br />
      <br></br>
      <button onClick={removeVal}>Remove Value: {count}</button>
    </>
  )
}

export default App
