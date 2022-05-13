

import { GET_SHOES,GET_SHOES_SUCCESS,GET_PROFILE_FAILED, GET_SHOES_FAILED, GET_SHOES_BYID, GET_SHOES_BYTYPE } from "../Constants/actionType"


const initialstate={
    loading:false,
    tab:[],
    shoes:{}

}
const shoesReducer = (state=initialstate,{type,payload}) => {

    switch(type)
    {
        
        case GET_SHOES:
        return {...state,loading:false}
        
        case GET_SHOES_SUCCESS:
        return {...state,loading:true,tab:payload}
        
        
        case GET_SHOES_FAILED:
        return {...state,loading:false,error:payload}
       
        case GET_SHOES_BYID:
        return {...state,loading:true,shoes:payload[0]}

        case GET_SHOES_BYTYPE:
        return {...state,loading:true,tab:payload}

        default:
            return state;
    }
}

export default shoesReducer