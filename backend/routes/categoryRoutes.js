const express=require('express')
const {addCategory,updateCategory,getAllCategories,deleteCategory}=require('../controllers/categoryCltr')
const authMiddleware=require('../middlewares/auth')
const categoryRouter=express.Router()
categoryRouter.post('/addCategory',authMiddleware,addCategory)
categoryRouter.get('/all/categories',getAllCategories)
categoryRouter.post('/updateCategory/:categoryId',updateCategory)
categoryRouter.post('/deleteCategory/:categoryId',deleteCategory)
module.exports=categoryRouter