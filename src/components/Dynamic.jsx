import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Contexs } from './AuthPro'

const Dynamic = () => {
  const data =useLoaderData()
  const {user}=useContext(Contexs)
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Dynamic
