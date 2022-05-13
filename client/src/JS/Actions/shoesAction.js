
import { GET_SHOES,GET_SHOES_SUCCESS,GET_SHOES_FAILED,GET_SHOES_BYID, GET_SHOES_BYTYPE } from '../Constants/actionType'
import axios from 'axios'



//get all shoes
export const getshoes = () => async (dispatch) => {
   dispatch({ type: GET_SHOES })
   try {
       const res = await axios.get("http://localhost:7000/shoes/getallshoes")
       dispatch({ type: GET_SHOES_SUCCESS, payload: res.data })
   } 
   catch (error) {
       dispatch({ type: GET_SHOES_FAILED, payload: error})
   }
}

//get shoes by id

export const getshoesbyid = (id) => (dispatch) => {
    axios.get(`http://localhost:7000/shoes/id/${id}`)
        .then(res => dispatch({ type: GET_SHOES_BYID, payload: res.data }))
        .catch(err => console.log(err))
}

//get shoes by type
export const getshoesbytype = (type) => (dispatch) => {
    axios.get(`http://localhost:7000/shoes/${type}`)
        .then(res => dispatch({ type: GET_SHOES_BYTYPE, payload: res.data }))
        .catch(err => console.log(err))
}