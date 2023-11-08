import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Contexs } from '../components/AuthPro'
import Swal from 'sweetalert2'
import axios from 'axios'

const My = () => {
  const {user}=useContext(Contexs)
  const [datas,setdatas]=useState([])
  console.log(user)
  const url = `https://assignment-pink-eight.vercel.app/my?email=${user?.email}`
  
  // ,{withCredentials: true }
  
  useEffect(()=>{

    axios.get(url)
    .then(data => {
      setdatas(data.data)
    })


    // fetch(url)
    // .then(result => result.json())
    // .then(data => setdatas(data))


  },[url])
  console.log(datas)
  const handledelete =(id)=>{
    console.log(id)
    fetch(`https://assignment-pink-eight.vercel.app/my/${id}`,{
      method:'DELETE'

    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount>0){
        Swal.fire({
          title: "Good job!",
          text: "Delete successfully ",
          icon: "success"
        });
        const remaining = datas.filter(data => data._id !==id);
        setdatas(remaining)
      }
    })

  }
  return (
    <div className="min-h-[800px]">
    <h1 className='text-center text-4xl font-semibold lg:my-6' >My assignment</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1200px] bg-white mx-auto justify-around items-center gap-6 lg:pl-40 lg:my-10 md:my-9 '>
      {
        datas.map(item=> <div key={item._id} className="card lg:w-96 bg-base-100 md:w-auto shadow-xl">
        <figure><img className='w-full h-[300px]' src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.titles}</h2>
          <p>{item.description}</p>
          <p>Mark : {item.mark}</p>
          <div className="card-actions justify-end">
            <button  onClick={()=>handledelete(item._id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>)
      }
    </div>

    
    </div>
  )
}

export default My
