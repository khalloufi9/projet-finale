import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import './UserLogin.css'
import { userregister } from '../JS/Actions/useAction'
import Notification from './Notification'

const UserRegister = () => {

    const [fullName,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[ville,setville]=useState("")
    const[adresse,setadresse]=useState("")
    const[codepostal,setcodepostal]=useState("")
    const[password,setPassword]=useState("")
    const[click,setclick]=useState(false)
    const dispatch = useDispatch()
 
    //  tableau d'erreur
    const err = useSelector(state => state.userReducer.error)
    const tab=err.errors
   

    // loading
    const loading = useSelector(state => state.userReducer.loading)
    console.log(loading)
   //msg-success
   const msg=useSelector(state=>state.userReducer.msg)

    //fonction registre
    const register=(e)=>{
    const newUser={fullName,email,phone,ville,adresse,codepostal,password}
    e.preventDefault();
    dispatch(userregister(newUser));
    setclick(true)
    if(loading=false)
    {
    alert(msg.msg)
    }
    }
    
 if(click && loading) {return (<Notification error={tab}></Notification>)}
 else{
  return (
    <div style={{display:"flex",marginLeft:"50px"}}>
    <img src="https://baddal.tn/assets/images/user/login.svg" alt="connexion" style={{width:"500px"}}/>
      <div className='cadre'>
    <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h2>Inscrivez-vous</h2>

                    <div className="form-group">
                        <label >Nom d'utilisateur</label>
                        {/*<h2>{err.errors.length&&err.errors[0].msg}</h2>*/}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="FullName"
                            onChange={(e)=>setName(e.target.value)}
                            value={fullName}
                            
                        />
                    </div>

                    <div className="form-group">
                        <label >Votre e-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            
                        />
                    </div>

                    <div className="form-group">
                        <label >Numéro de télephone</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            onChange={(e)=>setPhone(e.target.value)}
                            value={phone}
                           
                        />
                    </div>
                    <div className="form-group">
                        <label >Ville</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ville"
                            onChange={(e)=>setville(e.target.value)}
                            value={ville}
                           
                        />
                    </div>
                    <div className="form-group">
                        <label >Adresse</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Adresse"
                            onChange={(e)=>setadresse(e.target.value)}
                            value={adresse}
                           
                        />
                    </div>
                    <div className="form-group">
                        <label >Code postale</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Code postale"
                            onChange={(e)=>setcodepostal(e.target.value)}
                            value={codepostal}
                           
                        />
                    </div>

                    <div className="form-group">
                        <label >Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={register}
                        style={{marginTop:"10px"}}
                       
                    >
                        S'inscrire
                    </button>
                    <div>
                        Vous avez déja un compte ? <Link to={`/login`}>S'identifier </Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
  )}
}

export default UserRegister