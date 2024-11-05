import Chai from "./Chai"

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
function App() {
  const username ="chai aur code"
  return (
    //<chai/>//ik hi element return kar sakte hai
    <>
      <Chai/>
      <h1>Chai aur React | {username}</h1>
      {/* variable inject */}
      <p>Check para</p>
    </>//div kai bina bhi
  )
}

export default App
