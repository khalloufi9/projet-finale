

import { PANIER_REGISTER,PANIER_REGISTER_SUCCESS,PANIER_REGISTER_FAILED,GET_PANIER,GET_PANIER_SUCCESS,GET_PANIER_FAILED} from "../Constants/actionType"
import axios from 'axios'


export const panierregister = (newPanier) => async (dispatch) => {
   dispatch({ type: PANIER_REGISTER })
   try {
       const res = await axios.post("http://localhost:7000/panier/registerPanier", newPanier)
       dispatch({ type: PANIER_REGISTER_SUCCESS, payload: res.data })
   } catch (error) {
       dispatch({ type: PANIER_REGISTER_FAILED, payload: error.response.data })
   }
}

//get panier
export const getpanier = () => async (dispatch) => {
    dispatch({ type: GET_PANIER })
    try {
        const res = await axios.get("http://localhost:7000/panier/getpanier")
        dispatch({ type: GET_PANIER_SUCCESS, payload: res.data })
    } 
    catch (error) {
        dispatch({ type: GET_PANIER_FAILED, payload: error})
    }
 }

 //DELETE ARTCILE
 export const deletearticle = (id) => async (dispatch) => {
    axios.delete(`http://localhost:7000/panier/${id}`)
    .then(res => dispatch(getpanier()))
    .catch(err => console.log(err))
 }
