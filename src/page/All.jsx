import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const All = () => {
const [selectdata,setselectdata]=useState('')

console.log("here in my select..",selectdata)
// const [datas,setdatas]=useState([])


  const data = useLoaderData()

  const [data2,setdata2]=useState(data)

  const url = `http://localhost:3000/my?selectdata=${selectdata}`
  useEffect(()=>{
    fetch(url)
    .then(result => result.json())
    .then(data => setdata2(data))
  },[url])



 
  const selects = (e)=>{
    const values = e.target.value
    setselectdata(values)
  
  }
  return (
    <div>

    <div className='w-52 max-w-[1200px] mx-auto my-28'>
    <label  className='h-auto ' >Select One</label>
          <select onChange={selects} name="cars" id="cars">
          <option value="None">None</option>
            <option value="Easy">Easy</option>
            
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            
          </select>
    
    </div>
    <div className='max-w-[1200px] grid grid-cols-2 gap-7 pl-40 mx-auto  my-44'>

   


      {
        data2?.map(item =><div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
          <Link to={`/view/${item._id}`}><button className='btn btn-accent'>view</button></Link>
            <Link to={`/update/${item._id}`}><button   className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div>)
      }
    </div>
    </div>
  )
}

export default All
