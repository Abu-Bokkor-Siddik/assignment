import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const View = () => {
    const data = useLoaderData()
    console.log(data)
    
  return (
    <div>
     <div><div  className="card w-96 bg-base-100 shadow-xl">
     <figure><img src={data.thumbnail} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-center">
         <Link  to={`/dynamic/${data._id}`}><button   className="btn btn-primary">Take Assignment</button></Link>
       </div>
     </div>
   </div></div>
    </div>
  )
}

export default View
