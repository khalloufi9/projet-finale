import React, {Component} from 'react';
import { Button,Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
const Alert = () => {

  const user=useSelector(state=>state.userReducer.user)
  const nom=user.fullName
  return (
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Bonjour Msr/Mme {nom}</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Votre Commande a eté passer avec succes</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="primary"><Link to="/home" style={{color:"white"}}>Close</Link></Button>
    </Modal.Footer>
  </Modal.Dialog>
  )
}

export default Alert