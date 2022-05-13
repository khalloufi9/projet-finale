import React, { useState } from 'react'
import {Alert,Button} from 'react-bootstrap'
import './Notification.css'
import {Link} from 'react-router-dom'

const Notification = ({error}) => {
  const [show,setshow]=useState(true)
  
  {/*if (show)
  {return (<button onClick={()=>setshow(false)}>Alert</button>)}
  else
{*/}

return(
      <div className='marge'>
      <Alert variant="danger" o-nClose={() => setshow(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
     <div className='msg'> {error && error.map(el=><p>{el.msg}</p>)} </div>
     
      <Button onClick={()=>setshow(true)}>  <Link to="/home" style={{color:"white"}}>close</Link></Button>
     
      </Alert>
      </div>
      )
}

export default Notification