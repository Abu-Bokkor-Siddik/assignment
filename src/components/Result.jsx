import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Result = () => {
    // http://localhost:3000/submits?stutas=complete


    // axios.get(url,{withCredentials: true })
    // .then(data => {
    //   setdatas(data.data)
    // {withCredentials:true}

    const [data,setdata]=useState([])
    console.log(data)
    useEffect(()=>{
        axios.get('http://localhost:3000/submits?stutas=complete',
   )
    .then(data=>{
        setdata(data.data)
    })
    },[])
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">Your Result</h1>
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 lg:pl-32 gap-8 my-5">
      {
        data?.map(item=><div key={item._id} className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.titles}</h2>
          <p>Mark : {item.mark}</p>
          <p>{item.selectdata}</p>
          <p> Stutas:{item.stutas}</p>
          <div className="card-actions justify-between">
          
          </div>
        </div>
      </div>)
      }
      
      </div>
      
    </div>
  )
}

export default Result
