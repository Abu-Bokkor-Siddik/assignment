import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Submited = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1>submited{data.length}</h1>
      <div className='grid grid-cols-2 max-w-[1200px] mx-auto gap-6 pl-40'>
      {
        data?.map(item => <div key={item._id}  className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <Link  to={`/dynamic/${data._id}`}><button   className="btn btn-primary">Take Assignment</button></Link>
          </div>
        </div>
      </div>)
      }

      </div>
    </div>
  )
}

export default Submited
