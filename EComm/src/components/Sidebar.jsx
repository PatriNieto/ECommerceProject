import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Link 
      to="/" >
      Home
      </Link>
      
      <br/>

      <Link
      to="/about">
      About
      </Link>
      
      
      
      </div>
  )
}

export default Sidebar