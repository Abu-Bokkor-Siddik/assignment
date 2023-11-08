import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Contexs } from './AuthPro'
import Swal from 'sweetalert2'

const Dynamic = () => {
  const data =useLoaderData()
  const {user}=useContext(Contexs)
  // console.log(data)
  const {data1,description,email,image,mark,name,selectdata,thumbnail,titles}=data
  const submithandel = (e)=>{
    e.preventDefault()
    const url = e.target.pdf.value
    const textarea = e.target.textarea.value
    const userDetails =user?.email
    const stutas ='pending'
    const submitedD={url,textarea,data1,description,email,image,mark,name,selectdata,thumbnail,titles,userDetails,stutas}
    console.log(submitedD,)
    fetch("https://assignment-pink-eight.vercel.app/submits",{
    method:'POST',
    headers:{
      'content-type':'application/json'
       },
 body:JSON.stringify(submitedD)
 })
 .then(result => result.json())
 .then(data =>{
  console.log(data)
  if(data.acknowledged){
    return Swal.fire({
      title: "Good job!",
      text: "Added successfully ",
      icon: "success"
    });
  }
 
 })
  }
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      
      <div className="card flex-shrink-0  shadow-2xl bg-red-400 w-auto ">
        <form onSubmit={submithandel} className="card-body ">
        <p className='text-center text-3xl'>Create Assignment</p>

        

          <label className="label">
              <span className="label-text">Pdf Url</span>
            </label>
            <input name='pdf' type="text" placeholder="Pdf url" className="input input-bordered" required />



          <label className="label">
              <span className="label-text">Note</span>
            </label>
            <textarea name='textarea' className="textarea textarea-secondary" placeholder="write some note here"></textarea>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      
    </div>
  )
}

export default Dynamic
