
import React from 'react'
import { GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS,LOGOUT } from '../Constants/actionType'

const initialstate={
    loading:false,
    isAuth:false,
    error:[],
    user:{}
    
}
const userReducer = (state=initialstate,{type,payload}) => {

    switch(type)
    {
        case USER_REGISTER:
        case USER_LOGIN:
        case GET_PROFILE:
        return {...state,loading:true}
        
        case USER_REGISTER_SUCCESS:
        return {...state,loading:false,msg:payload}
        
        case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, token: payload.token, user: payload.user, isAuth: true }
        case GET_PROFILE_SUCCESS:
        return{...state,loading:false,isAuth:true,user:payload}
        case USER_REGISTER_FAILED:
        case USER_LOGIN_FAILED:
        case GET_PROFILE_FAILED:
        return {...state,loading:true,error:payload}
        case LOGOUT:
        return { ...state, isAuth: false, loading: false }

        default:
            return state;
    }
}

export default userReducer