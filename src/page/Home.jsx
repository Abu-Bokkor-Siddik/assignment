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

    
    <div className='max-w-[1200px] mx-auto mt-10'>
    <p className='text-center text-4xl '>Feature</p>
    <div className='grid grid-cols-3 max-w-[1200px] mx-auto gap-20 py-20 my-7'>
    {
      data?.map(item => <div key={item.id} className="card card-compact h-[300px]  w-auto bg-base-100 shadow-xl">
      <figure><img className='w-full h-[200px]' src={item.img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        
        
      </div>
    </div>)
    }
    </div>
    </div>
    <Card></Card>


   
     
    </div>
  )
}

export default Home
