import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Contexs } from '../components/AuthPro'

const Login = () => {

    const {google,logins}=useContext(Contexs)
    // google 
    const googlelog =()=>{
        google()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
 const handellogins=(e)=>{
    e.preventDefault()
    const email= e.target.email.value
    const password= e.target.password.value
    logins(email,password)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log(email,password)
 }

  return (
    <div>
      


    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handellogins} className="card-body">
      <p className='text-center text-3xl font-semibold'>Login</p>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p>If you have no account <Link className='text-blue-800' to='/register'>Go Register</Link></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={googlelog} className='btn btn-primary mx-8'>google</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
