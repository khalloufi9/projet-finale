import React,{useEffect} from 'react'
import './Home.css'
import { Nav,Container, Navbar } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { getshoes } from '../../../JS/Actions/shoesAction'

const Home = () => {

  const dispatch=useDispatch()
  const tabOfshoes=useSelector(state=>state.shoesReducer.tab)

  {useEffect(()=>{
    dispatch(getshoes())
  },[])}
  return (
    
<div>
      {/*1 image-body*/}
      
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <img className='imagebody'src="https://i.pinimg.com/originals/32/e3/62/32e3620ac9837b08451ff743eb703a70.jpg"
           />
            <img className='imagebody'src="https://ae01.alicdn.com/kf/Hb4e46d09882d4da8a3bbc64a6a811430U/Sandales-talons-pais-et-pointus-pour-femmes-chaussures-de-travail-simples-grande-taille-Large-41-43.jpg"/>
            <img className='imagebody'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr71KZUC9LZsdJ9ZPPwbmW7I1r44GRuSurHQhdX0XQQRxI4FiD-7MmY3CjSKR6Ba3cVcg&usqp=CAU"/>

        </div>
         {/*2 service*/}
      <div>
        <ul>
          <li>
            <div>
              <img  className='logos'src="https://img.icons8.com/ios/344/deliver-food.png"></img>
              <h4>LIVRAISON</h4>
            </div>
            <div>
              <p>
                Livraison et retour gratuits
              </p>
            </div>
          </li>
          <li>
          <div>
              <img className='logos' src="https://img.icons8.com/ios/344/money-circulation.png"></img>
              <h4>SATISFAIT</h4>
            </div>
            <div>
              <p>
                Satisfait ou remboursé sous 10 jours
              </p>
            </div>
          </li>
          <li> <div>
              <img className='logos' src="https://img.icons8.com/ios/344/service.png"></img>
              <h4>SERVICE</h4>
            </div>
            <div>
              <p>
                Service client gratuit
              </p>
            </div>
            </li>
        </ul>
      </div>
{/*card-image */}
<div className='card'>
  <img src="https://nerogiardini.it/wp-content/uploads/2020/02/nerogiardini-pe-2020-NG-alta-SL16.jpg"></img>
  <img src="https://nerogiardini.it/wp-content/uploads/2020/02/nerogiardini-pe-2020-NG-alta-SL17.jpg"></img>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YcRlChTy14XiYjYm3LkpPhzTfr25vc3d5XYjB-p_R5Kr3kJVB9todiC3uagtzVrmsAg&usqp=CAU"></img>
  <img src="https://nerogiardini.it/wp-content/uploads/2022/02/NeroGiardini_Collezione-Junior_Primavera-Estate_2022.jpg"></img>
</div>
    

  {/*footer */}  
  <footer>
 
  <p>Copyrights © 2020 by CityMode. All Rights Reserved.</p>
  </footer>
  </div>
  )
}

export default Home