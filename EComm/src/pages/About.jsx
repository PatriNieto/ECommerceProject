import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div>About</div>
    <p>P4tr1c14</p>
    <Link 
    to={`https://www.linkedin.com/in/patricia-nieto-madro%C3%B1ero/`}>
    <p>LinkedIn</p>
    </Link>
    </>
  )
}

export default About