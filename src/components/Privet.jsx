import React from 'react'
import { useContext } from 'react'
import { Contexs } from './AuthPro'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const Privet = ({children}) => {
    const {user,loading}=useContext(Contexs)
    if(loading){
        return <div><img className='flex justify-center lg:max-w-[1200px] mx-auto' src="https://i.ibb.co/qmMJFf4/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" /></div>
    }
    if(user){
        return children
    }
  return (
    <Navigate to='/login'>
      
    </Navigate>
  )
}
Privet.propTypes = {
    children: PropTypes.node,
 }
export default Privet
