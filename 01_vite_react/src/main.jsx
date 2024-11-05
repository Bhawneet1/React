import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click to go to google"
// }
//function execute hota hai par yeh object hai
const another_element = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//from react not custom
const anotherUser ="Chai aur react"
const reactElement = React.createElement(
  'a',//tag
  {
    href: "https://google.com",
    target: "_blank"
  },//props
  'Click me to visit google',//children
  anotherUser//variable
)
//no if else or loops
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <reactElement />matlab iss ch hi convert honda hai assi direct eh hi de dita */
      // <MyApp/> esse direct function likh sakte hai
      // <reactElement/>
      //function execute hota hai par yeh object hai
      //ReactElement//donot expect object therefore not working error
      //another_element
      // reactElement
      <App/>
    }
  </StrictMode>,
)
