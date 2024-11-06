import React from 'react'

const Card = ({username,btntext="visit me"}) => {
  console.log(username);
  
  return (
    <>
      <div className='bg-slate-600 shadow-lg rounded-lg m-7 h-100 p-3 text-left'>
        <h3 className='text-black'>Hello {username}</h3>
        <p className='text-black'>Lorem ipsum dolor sit amet.{username}</p>
        <div className='h-10 w-10 rounded-full bg-black mt-5 '></div>
        {/* <button className='rounded-lg bg-blue-400 mt-4'>{btntext || "visit me"}</button> */}
        {/* if no prop btntext passed  method-1*/}
        <button className='rounded-lg bg-blue-400 mt-4'>{btntext }</button>
        {/* method-2 */}
      </div>
    </>
  )
}

export default Card