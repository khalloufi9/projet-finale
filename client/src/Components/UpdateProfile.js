import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProfile } from '../JS/Actions/useAction'
import { updateProfile } from '../JS/Actions/useAction'
const UpdateProfile = () => {
  const dispatch=useDispatch()
  const profile=useSelector(state=>state.userReducer.user)
  console.log(profile)
  const [newUser, setNewUser] = useState({
    fullName: profile && profile.fullName,
    email: profile && profile.email,
    phone: profile && profile.phone,
    ville:profile && profile.ville,
    adresse:profile && profile.adresse,
    codepostal:profile && profile.codepostal

})

const handelChange = (e) => {
  setNewUser({ ...newUser, [e.target.name]: e.target.value })
}
  
  return (
  
    <div class="form-style-10">
<h1 >Mon Profile</h1>
<form>
<div class="section">Mes Coordonnées</div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhevXnyOVcWbijNNhRcsVsVDc5vYwQZhXLHVAj2QhCljbqlGvFf2Dx44atsbx7-jeEq4&usqp=CAU"
style={{marginTop:"10px",marginBottom:"10px"}}></img>
<div class="inner-wrap">
   <label>Nom :<input type="text" name="fullName" value={newUser.fullName}  onChange={handelChange} /> </label>
   <label>Email :<input input type="text" name="email" value={newUser.email}  onChange={handelChange}></input>  </label>
   <label>Ville :<input type="text" name="ville" value={newUser.ville}  onChange={handelChange}></input>  </label>
   <label>Télephone :<input type="text" name="phone" value={newUser.phone}  onChange={handelChange}></input>  </label>
   <label>Addresse :<input type="text" name="adresse" value={newUser.adresse} onChange={handelChange}></input>  </label>
   <label>Code Postale :<input  type="text" name="codepostal" value={newUser.codepostal} onChange={handelChange}></input>  </label>
   <button onClick={() => { dispatch(updateProfile(profile._id, newUser))}}><Link to="/Profile">Confirmer</Link></button>
</div> 
</form>

</div>

   
  )
}

export default UpdateProfile