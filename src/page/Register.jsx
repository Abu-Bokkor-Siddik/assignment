import React, { useContext } from 'react'
import { Contexs } from '../components/AuthPro'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const {register,profile}=useContext(Contexs)
    const navigat = useNavigate()
    const formdata = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email= e.target.email.value
        const password = e.target.password.value 
         
        register(email,password)
        .then(res => {
            profile(name,photo)
            .then(result=> console.log('here is my result',result.uer))
            .catch(error => console.log(error))
            console.log(res)
            return navigat('/')
        }
            
            

            )
        .catch(err => console.log(err))
        console.log(name,photo,email,password)
    }
       
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={formdata} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <p>If you hava an account <Link className='text-blue-800' to='/login'>Go Login</Link></p>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Register
