import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Submited = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
     
      <div className='grid grid-cols-2 max-w-[1200px] mx-auto gap-6 pl-40'>
      {
        data?.map(item => <div key={item._id}  className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.titles}</h2>
          <p>Submited by :{item.userDetails}</p>
          <p>Mark:{item.mark}</p>
          <div className="card-actions justify-center">
            <Link  to={`/mark/${item._id}`}><button   className="btn btn-primary">Mark</button></Link>
          </div>
        </div>
      </div>)
      }

      </div>
    </div>
  )
}

export default Submited
