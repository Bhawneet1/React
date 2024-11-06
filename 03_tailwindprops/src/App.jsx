import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/Card'
function App()
{
  const [count, setCount] = useState(0)
  let myObj ={
    username:"Bhawneet",
    age:20
  }
  let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl h-[400px] text-red-500 p-40'>Tailwind Test</h1>
      <Card channel="chaiaurcode" someObject = {newArr}/>
      {/* props are given */}
      <Card someObject = {myObj} username= "chai" btntext="Button text"/>
    </>
  )
  // components from dev ui
}

export default App
