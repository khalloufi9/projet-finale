import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Route } from 'react-router-dom'
import UserProfile from './UserProfile'

const PrivateRoute = ({component:Component,...defaultprops }) => {

    const isAuth=useSelector(state=>state.userReducer.isAuth)
    if (!isAuth) <Navigate to='/login'/>
    else{
  return (
 <UserProfile/>
  )
}}

export default PrivateRoute