import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getshoesbyid} from '../../../JS/Actions/shoesAction'
import {panierregister} from '../../../JS/Actions/panierAction'
import { Link, useParams } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap'
import './pers.css'
const Pers = () => {
    const {id} = useParams();
    const [taille, setTaille] = useState("");
    const [click,setclick]=useState(false)
    const dispatch=useDispatch()
    const shoes=useSelector(state=>state.shoesReducer.shoes)
    const link1=shoes.link1
    const prixinitial=shoes.prix
    const titre=shoes.titre
    const description=shoes.description
    const eco=(prixinitial*40)/100
    const nvprix=prixinitial-eco

    
    
    {useEffect(()=>{
      dispatch(getshoesbyid(id))
    },[])}
    
    const registerP=(e)=>{
      
      const prixpromo=nvprix
      const prix=shoes.prix
      const newShoes={link1,titre,description,prix,prixpromo,taille}
      e.preventDefault();
      dispatch(panierregister(newShoes));
    
      }

    const handleChange=(e)=>
    {
      e.preventDefault();
      setTaille(e.target.value)
      setclick(true)
    }
  return (
    <div className='Global'>
    <div className='Special'>
      <img src={shoes.link1} alt="image1"></img>
      <img src={shoes.link2} alt="image2"></img>
      <img src={shoes.link3} alt="image3"></img>
      <img src={shoes.link4} alt="image4"></img>
    </div>
    <div className='Information'>
    <span>New !!</span>
    <h5>Made by NeroGiardini</h5>
   
    <p>{shoes.titre}-{shoes.description}</p>
    <h9>-40% vous economisez {eco} $</h9>
    <div className='price'>
    <span1 className='boldprice'>{nvprix} $</span1>
    <span2 className='slashed'>{prixinitial} $</span2>
    </div>
    
    
      
    <select onChange={handleChange} >
    <option className='titre' >Choississez votre taille</option>
    <option value="27" >27</option>
    <option value="28" >28</option>
    <option value="29" >29</option>
    <option value="30" >30</option>
    <option value="31" >31</option>
    <option value="32" >32</option>
    <option value="33" >33</option>
    <option value="34" >34</option>
    <option value="35" >35</option>
    <option value="36" >36</option>
    <option value="37" >37</option>
    <option value="38" >38</option>
    <option value="39" >39</option>
    <option value="40" >40</option>
  </select>
  
  {click  ? <button aria-label='Ajouter au panier' onClick={registerP}  > <Link to={"/shoes/panier"}>Ajouter au panier</Link></button>:
  <button aria-label='Ajouter au panier' onClick={()=>alert("Choississez votre taille")}  > <Link to={"#"}>Ajouter au panier</Link></button>}
 
    </div>
  </div>
  )
}

export default Pers