import React from 'react'
import { PANIER_REGISTER,PANIER_REGISTER_SUCCESS,PANIER_REGISTER_FAILED,
     GET_PANIER,GET_PANIER_SUCCESS,GET_PANIER_FAILED } from '../Constants/actionType'

const initialstate={
    loading:false,
    panier:[]
    
}
const panierReducer = (state=initialstate,{type,payload}) => {
 
     switch(type)
    {
        case PANIER_REGISTER:
        case GET_PANIER:

        return {...state,loading:false}
        
        case PANIER_REGISTER_SUCCESS:
        return {...state,loading:true,msg:payload}
        
        case GET_PANIER_SUCCESS:
        return {...state,loading:true,panier:payload}
  
        
    
        case PANIER_REGISTER_FAILED:
        case GET_PANIER_FAILED:
        return {...state,loading:false,error:payload}
       
        default:
            return state;
    }
  
}

export default panierReducer