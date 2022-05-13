import React,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import './UserLogin.css'
import { userlogin } from '../JS/Actions/useAction'
import Loader from "./Loader" 
import { Navigate,Link } from 'react-router-dom';


const UserLogin = () => {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const dispatch=useDispatch()
const loading = useSelector(state => state.userReducer.loading)
const isAuth=useSelector(state=>state.userReducer.isAuth)
const user=useSelector(state=>state.userReducer.user)
const login = (e) => {
    const cred = { email, password }
    e.preventDefault();
    dispatch(userlogin(cred))

    
}
  return (
    
    isAuth?<Navigate to="/Profile" />:
     ( 
    <div style={{display:"flex",marginLeft:"50px"}}>
    <img src="https://baddal.tn/assets/images/user/login.svg" alt="connexion" style={{width:"500px"}}/>
     <div className='cadre-connexion'>
    <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h2>Connexion</h2>

                    <div className="form-group">
                        <label >Adresse Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="e-mail"
                           onChange={(e)=>setEmail(e.target.value)}
                           value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label >Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Mot de passe"
                           onChange={(e)=>setPassword(e.target.value)}
                           value={password}
                     
                        />
                    </div>

                    

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={login}
                        style={{marginTop:"10px"}}

                    >
                        S'identifier
                    </button>
                   
                </form>
                <h7>Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link> </h7>
            </div>
        </div>
        </div>
        </div>
  ))
}

export default UserLogin