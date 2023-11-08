import { useContext, useState } from 'react'
import { Contexs } from '../components/AuthPro'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'


const Create = () => {

  const {user}=useContext(Contexs)
  const [startDate, setStartDate] = useState(new Date());
  const [selectd,setselectd]=useState('')
  const createdata =(e)=>{
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
 const assData ={titles,mark,description,thumbnail,data1,email,image,selectdata,name:user?.displayName}

 console.log(assData)
 fetch("https://assignment-pink-eight.vercel.app/ass",{
 method:'POST',
 headers:{
  'content-type':'application/json'
 },
 body:JSON.stringify(assData)
 })
 .then(result => result.json())
 .then(data =>{
  if(data.acknowledged){
    return Swal.fire({
      title: "Good job!",
      text: "Added successfully ",
      icon: "success"
    });
  }
  console.log(data)
 })
  }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      
      <div className="card flex-shrink-0  shadow-2xl bg-slate-100 w-auto ">
        <form onSubmit={createdata} className="card-body ">
        <p className='text-center text-3xl'>Create Assignment</p>

        <div className='grid grid-cols-2 w-auto gap-6 '>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input  name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input name='mark' type="text" placeholder="mark" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name='description' type="text" placeholder="Description" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail</span>
            </label>
            <input name='thumbnail' type="text" placeholder="thumbnail" className="input input-bordered" required />
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

            <DatePicker name='data' selected={startDate} onChange={(date) => setStartDate(date)} />
            
            
          </div>



          
          </div>

          <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name='image' type="text" placeholder="Image" className="input input-bordered" required />



          <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input defaultValue={user?.email} name='email' type="text" placeholder="Image" className="input input-bordered" required readOnly />
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Create
