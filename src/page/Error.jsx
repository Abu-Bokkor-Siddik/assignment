import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>error</h1>
      <Link to='/'><button>go home</button></Link>
    </div>
  )
}

export default Error
