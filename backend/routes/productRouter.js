const express=require('express')
const {addProduct}=require('../controllers/productCltr')
const authMiddleware=require('../middlewares/auth')
const productRouter=express.Router()
productRouter.post('/add/:categoryId',authMiddleware,addProduct)
module.exports=productRouter