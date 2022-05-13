import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getpanier } from '../../JS/Actions/panierAction'
import Article from './Femme/Article'
import './Panier.css'
import Alert from './Alert'
const Panier = () => {

const panier=useSelector(el=>el.panierReducer.panier)
const isAuth=useSelector(el=>el.userReducer.isAuth)
console.log(isAuth)
const dispatch=useDispatch()
var lodash = require('lodash');
var arr = panier.map(el=>+(el.prixpromo));
var sum = lodash.sum(arr);

{useEffect(()=>{
    dispatch(getpanier())
  },[])}


  return (
    <div >
      <div>
        <h2 style={{marginLeft:"80px"}} >MON PANIER</h2>
        {panier.map(el=><Article article={el}/>)}
      </div>
      <div  className='total'>
        <h4>Total Commande: {sum} $</h4>
        
       {isAuth?<button > <Link to='/Modal' style={{color:"white",textDecoration:"none"}}>Passer Ma Commande</Link></button>:
       <button><Link style={{color:"white",textDecorationLine:"none"}} to="/login">Finaliser ma commande</Link></button>
      }
      </div>
    </div>
  )
}


export default Panier