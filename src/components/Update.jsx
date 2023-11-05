import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useContext } from 'react';
import { Contexs } from './AuthPro';

const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(Contexs)
    const data = useLoaderData()
    console.log(data)
    const createdatas=(e)=>{
        e.preventDefault()
        const titles = e.target.title.value
    const mark = e.target.mark.value
    const description = e.target.description.value
    const thumbnail = e.target.thumbnail.value
    const data1 = e.target.data.value
    const email = e.target.email.value
    const image = e.target.image.value
    const selectdata = e.target.cars.value
    console.log(titles,mark,description,thumbnail,data1,selectdata,email,image)
 const assDatas ={titles,mark,description,thumbnail,data1,email,image,selectdata}



 fetch(`http://localhost:3000/my/${data._id}`,{
 method:'PUT',
 headers:{
  'content-type':'application/json'
 },
 body:JSON.stringify(assDatas)
 })
 .then(result => result.json())
 .then(datass =>{
    if(datass.modifiedCount>0){
       return alert('updated succsefully')
    }
    console.log(datass)
 })

    }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      
      <div className="card flex-shrink-0  shadow-2xl bg-red-400 w-auto ">
        <form onSubmit={createdatas} className="card-body ">
        <p className='text-center text-3xl'>Update Assignment</p>

        <div className='grid grid-cols-2 w-auto gap-6 '>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input defaultValue={data.titles}  name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input defaultValue={data.mark} name='mark' type="text" placeholder="mark" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input defaultValue={data.description} name='description' type="text" placeholder="Description" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail</span>
            </label>
            <input defaultValue={data.thumbnail} name='thumbnail' type="text" placeholder="thumbnail" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label  className='h-auto' >Select One</label>
          <select name="cars" id="cars">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            
          </select>
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>

            <DatePicker defaultValue={data.data} name='data' selected={startDate} onChange={(date) => setStartDate(date)} />
            
            
          </div>



          
          </div>

          <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input defaultValue={data.image} name='image' type="text" placeholder="Image" className="input input-bordered" required />



          <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input defaultValue={user?.email} name='email' type="text" placeholder="Image" className="input input-bordered" required readOnly />
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Update
