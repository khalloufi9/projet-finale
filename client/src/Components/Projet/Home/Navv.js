import React,{useState} from 'react'
import  { Nav,Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Femme from '../Femme/Femme'
import { logout } from '../../../JS/Actions/useAction'
import { useDispatch } from 'react-redux'
const Navv = () => {

const [search,setsearch]=useState("")
const [change,setchange]=useState(false)
const tableauobj=useSelector(state=>state.shoesReducer.tab)
const x=tableauobj.filter(el=>el.titre.includes(search))
const dispatch=useDispatch()
//handle change
const handelchange=(e)=>{
  const term=e.target.value
  setsearch(term)
 
  console.log(x)

}

  return (
    
        <div >
    {/*Navbar*/}
      
      <div className='Navbar'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PxmoLuN9BlVCIRt93ZDbHnHK9NjWLT43gBREGSZpO3OGcr3GYPKogomLQNY4QGMiTjI&usqp=CAU"/>
          <div className='chercher'> 
          <input type="text" placeholder='Rechercher un produit,une marque' onChange={handelchange}/>
              <img className='search' src='https://cdn-icons-png.flaticon.com/512/149/149309.png'onClick={()=>setchange(true)} ></img>
        </div>
          <div className='division'>
          <a href='/register'>
          <div className='Compte'>
          <img className='logo' src="https://img.icons8.com/ios-glyphs/344/user-male-circle.png"></img>
          <label>Connexion</label>
          </div>
          </a>
          <a href="/shoes/panier">
          <div className='Compte'>
          <img  className='logo'src="https://img.icons8.com/ios/344/shopping-basket.png"></img>
          <label>Mon Panier</label> 
          </div>
          </a> 
          
          <a href="/home">
          <div className='Compte'>
          <img onClick={() => dispatch(logout())} className='logo'src="https://www.icone-png.com/png/21/21331.png"></img>
          <label onClick={() => dispatch(logout())}>Déconnexion</label> 

          </div>
          </a> 
          </div>
      </div>
    
      {/*Navbar 2 home*/}
  
  <div>
  <Navbar bg="primary" variant="dark" className='navbar'>
    <Container>
    <Navbar.Brand href="/home">Accueil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/homme">Homme</Nav.Link>
      <Nav.Link href="/femme">Femme</Nav.Link>
      <Nav.Link href="/enfant">Enfant</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>

 {change?
  <div style={{display:"flex",flexDirection:"row"}}>
        <h1>{search}</h1>
       <div > {x.map(el=><Femme shoes={el}/>)}</div>
   </div>:<div><h1>...</h1></div>
}
    </div>
  )
}

export default Navv