const express = require("express")
const {registershoes,getallshoes,getshoesbyid,getshoesbytype} =require("../controllers/shoes.controller")
const router = express.Router()



router.post('/registershoes',registershoes)
router.get('/getallshoes',getallshoes)
router.get('/:type',getshoesbytype)
router.get('/id/:_id',getshoesbyid)

module.exports = router