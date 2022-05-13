import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProfile } from '../JS/Actions/useAction'
import Panier from './Projet/Panier'
import { Form } from 'react-bootstrap'
import {Link} from  'react-router-dom'
const UserProfile = () => {

  const dispatch=useDispatch()
  const profile=useSelector(state=>state.userReducer.user)
  console.log(profile)

  {useEffect(()=>{
    dispatch(getProfile())
  },[])}

    return (
       <div>
         <div class="form-style-10">
<h1 >Mon Profile</h1>
<form>
    <div class="section">Mon Profile</div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhevXnyOVcWbijNNhRcsVsVDc5vYwQZhXLHVAj2QhCljbqlGvFf2Dx44atsbx7-jeEq4&usqp=CAU"
    style={{marginTop:"10px",marginBottom:"10px"}}></img>
    <div class="inner-wrap">
        <label>Nom : {profile && profile.fullName} </label>
        <label>Email : {profile && profile.email} </label>
        <label>Ville : {profile && profile.ville} </label>
        <label>Télephone : {profile && profile.phone} </label>
        <label>Addresse : {profile && profile.adresse} </label>
        <label>Code Postale : {profile && profile.codepostal} </label>
        <button><Link to="/UpdateProfile">Modifier</Link></button>
    </div> 
</form>

</div>


<Panier/>
        
      
 </div>
    )
}

export default UserProfile