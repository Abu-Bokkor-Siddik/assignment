import React from 'react'
import { useLoaderData } from 'react-router-dom'

const View = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      <h1>view</h1>
    </div>
  )
}

export default View
