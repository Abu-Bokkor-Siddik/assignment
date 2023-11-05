import React from 'react'
import { useLoaderData } from 'react-router-dom'

const All = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      {
        data.map(item =><div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button   className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>)
      }
    </div>
  )
}

export default All
