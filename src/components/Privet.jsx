import React from 'react'
import { useContext } from 'react'
import { Contexs } from './AuthPro'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const Privet = ({children}) => {
    const {user,loading}=useContext(Contexs)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
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
