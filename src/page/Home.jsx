import React, { useLayoutEffect } from 'react'
import Bennar from '../components/Bennar'
import Card from '../components/Card'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className=''>
    <Bennar></Bennar>
    
    <Card></Card>
     
    </div>
  )
}

export default Home
