import React,{useState,useEffect} from 'react'
import '../Home/Home.css'
import './Femme.css'
import { useSelector,useDispatch } from 'react-redux'
import { getshoes } from '../../../JS/Actions/shoesAction'
import {Link} from "react-router-dom"

const Femme = ({shoes}) => {
  return (
  
    <Link to={`/shoes/${shoes._id}`} style={{textDecoration:"none"}}>
      <div className='cardBoots'>
      <img src={shoes.link1}></img>
      <p1>{shoes.titre}</p1>
      <p2>{shoes.description}</p2>
      <p3>{shoes.prix}$</p3>
      </div>
    </Link>
    
  )
}

export default Femme