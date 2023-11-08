import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const Submited = () => {
  // const data = useLoaderData()
  // console.log(data)
  const [data,setdata]=useState([])
  console.log(data)

// {withCredentials:true}
  useEffect(()=>{
    axios.get('https://assignment-pink-eight.vercel.app/submits?stutas=pending'
)
.then(data=>{
    setdata(data.data)
})
},[])
  return (
    <div className='min-h-[800px]'>
    <h1 className='text-center text-4xl font-semibold lg:my-6' >Submitted assignment</h1>
     
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1200px] mx-auto gap-6 my-10 lg:pl-40'>
      {
        data?.map(item => <div key={item._id}  className="card lg:w-96 bg-base-100 md:w-auto shadow-xl">
        <figure><img className='w-full h-[300px]' src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.titles}</h2>
          <p>Name :{item.name}</p>
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
