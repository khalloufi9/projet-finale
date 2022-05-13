import React,{useEffect} from 'react';
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import Loader from './Components/Loader'
import UserProfile from './Components/UserProfile'
import {useDispatch,useSelector} from 'react-redux'
import {getProfile} from './JS/Actions/useAction';
import { getshoes } from './JS/Actions/shoesAction'
import PrivateRoute from './Components/PrivateRoute';
import Popup from 'react-popup';
import Notification from './Components/Notification';
import Home from './Components/Projet/Home/Home'
import  Cards from './Components/Projet/Femme/Cards'
import Navv from './Components/Projet/Home/Navv';
import Pers from './Components/Projet/Femme/Pers';
import Panier from './Components/Projet/Panier'
import Alert from './Components/Projet/Alert';
import Homme from './Components/Projet/Homme/Homme';
import Enfant from './Components/Projet/Enfant/Enfant';
import UpdateProfile from './Components/UpdateProfile';
function App() {


  const dispatch=useDispatch()
  const isAuth=useSelector(state=>state.userReducer.isAuth)


  {useEffect(()=>{
    dispatch(getProfile())
  },[isAuth])}

  
 

  return (
    <div className="App">
     
  <Navv/>
   
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/femme" element={<Cards/>}/>
      <Route path="/homme" element={<Homme/>}/>
      <Route path="/shoes/:id" element={<Pers/>}/>
      <Route path="/shoes/panier" element={<Panier/>}/>
      <Route path="/Modal" element={<Alert />}/>
      <Route path="/UpdateProfile" element={<UpdateProfile/>}/>
      <Route path="/enfant" element={<Enfant/>}/>

      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/register" element={<UserRegister/>}/>
      <Route path="/Profile" element={<PrivateRoute path='/Profile' component={<UserProfile/>} />} />
  </Routes>


     </div>
  )}


export default App;
