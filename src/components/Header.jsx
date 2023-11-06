import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Contexs } from './AuthPro'

const Header = () => {
    const {user,logout}=useContext(Contexs)

    const logOut = ()=>{
        logout()
        .then(res =>console.log(res))
        .catch(err => console.log(err))
    }
  return (
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">

    {/**navbar 1200px */}
    <div className=' w-full max-w-[1200px] mx-auto '>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
            <div className='flex justify-center items-center gap-3'><img className='h-16 w-16 rounded-full' src="https://i.ibb.co/J32nPng/bb221ff6bcbb3537f0c791923b899b07.jpg" alt="" />
            
            <p>Online Group-Study</p>
            </div>
            
      </div>
      <div className="flex-none hidden lg:block">
        <div className="menu menu-horizontal">
          {/* Navbar menu content here */}

          <div className='flex gap-3 justify-center items-center  '>
          <NavLink className='' to='/'>Home</NavLink>
          {user?
          <NavLink to='/create'>Create </NavLink> :''}

         {user? <NavLink to='/all'>All Assignments  </NavLink> :''}
         {user?<NavLink to='/submited'> Submitted assignment </NavLink> :''}
         {user? <NavLink to='/my'>My assignment  </NavLink> :''}


          
         
          
          </div>
          {/** user name and profile would be here  */}
          <div className='flex justify-center items-center  '>
          {user?<div className='mx-4  '>name:{user?.displayName}</div>:''}

          {
            user?<div className="avatar">
            <div className="w-16 rounded-full ">
            <img src={user?.photoURL} />
            </div>
                </div>:''
          }
          

               {
                user?<button onClick={logOut} className='btn btn-accent'>logOut</button>: <NavLink to='/login'><button className='btn btn-accent ml-3'>login</button></NavLink>
               }
          
          </div>
          <div className='flex gap-3 justify-center items-center  '>
         
          </div>
        </div>



        
      </div>
{/**end */}
      </div>
    </div>
    {/* Page content here */}
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <div className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <div className='flex flex-col gap-2'>
      
      <NavLink className='' to='/'>Home</NavLink>
      <NavLink to='/create'>Create </NavLink>
      <NavLink to='/all'>All Assignments  </NavLink>
      <NavLink to='/my'>My assignment  </NavLink>
      </div>
    </div>
  </div>
  
</div>
  )
}

export default Header
