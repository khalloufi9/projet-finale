import React from 'react'
import { useDispatch } from 'react-redux'
import { GET_SHOES } from '../../../JS/Constants/actionType'
import './Article.css'
import{deletearticle} from '../../../JS/Actions/panierAction'
const Article = ({article}) => {

  const dispatch=useDispatch()
  return (
    <div>
        <div className='cadree'>
         <img src={article.link1} alt="image"/>
         <div className='form'>
        <spans>{article.titre}</spans>
        <br/> 
        {article.description}
        <br/>
        Couleur:"Marron"
        <br/>
        Taille:{article.taille}
        <br/>
        <a href ="#" onClick={()=>dispatch(deletearticle(article._id))} >Supprimer</a>
        </div>
        <div className='prix' >
        <h5>prix:</h5>
        <h4>{article.prix} $</h4> 
        <h5>{article.prixpromo} $</h5> 
        </div>
        </div>
    </div>
  )
}

export default Article