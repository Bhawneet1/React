import { useState , useCallback, useEffect,useRef} from 'react'


function App() {
  let [length,setLength]=useState(8)

  let [numberAllowed,setNumberAllowed]= useState(false)

  let[characterAllowed,setCharacterAllowed]=useState(false)

  let[password,setPassword]=useState("")
   //function esse banana hai

   //useref hook(to take reference)
   const passwordRef =useRef(null)
   
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str +="@#$%^&*?|`~=[]{}"

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])//fn,dependencies 
  //set password to optimise 

  const copyPasswordToClipBoard =useCallback(()=>{
      passwordRef.current?.select()
      // to give copy step
      //? as optional select as value can be null
      passwordRef.current?.setSelectionRange(7,100)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  //esse call karna hai
  //jab page load to call hota hai
  return(
  <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 py-3 text-orange-500 bg-black'>
    <h1 
    className='text-white text-center '>
    Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}/>

        <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipBoard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length :{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed} 
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={characterAllowed} 
          id='characterInput'
          onChange={()=>{
            setCharacterAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  </>
  )
}


export default App
