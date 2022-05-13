import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getshoesbytype } from '../../../JS/Actions/shoesAction'
import { useParams } from 'react-router-dom'
import Femme from '../Femme/Femme'

const Homme = () => {

const dispatch=useDispatch()
const tabOfshoes=useSelector(state=>state.shoesReducer.tab)

  {useEffect(()=>
    dispatch(getshoesbytype("Homme")),[])}

  return (
    <div>
    <h2>Nos nouveautés </h2>
    <h3>{tabOfshoes.length} articles</h3>
    <h3>Profiter -40% sur toutes les articles</h3>
    <img style={{width:"1200px",height:"200px"}}src="https://st2.depositphotos.com/1016929/5771/i/950/depositphotos_57713867-stock-photo-3d-forty-percent.jpgs"></img>
    <div className='list' >
        {tabOfshoes.map(el=><Femme shoes={el}/>)}
    </div>
    </div>
 
  )
}

export default Homme