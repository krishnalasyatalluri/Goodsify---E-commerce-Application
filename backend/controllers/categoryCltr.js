const mongoose=require('mongoose')
const Category=require('../models/Category')
const categoryCltr={}
categoryCltr.addCategory=async(req,res)=>{
    try{
        const body=req.body
        const newcategory=new Category(body)
        await newcategory.save()
        res.status(201).json(newcategory);
    }catch (error) {
        res.status(400).json({ error: error.message });
      }
}
categoryCltr.updateCategory=async(req,res)=>{
    try{
        const categoryId=req.params
        const {name,description}=req.body
        const updatedCategory=await Category.findByIdAndUpdate(categoryId,{name,description},{ new: true, runValidators: true })
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        res.status(200).json({ message: 'Category updated successfully.', category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: 'Error updating category.', error: error.message });
    }
}
categoryCltr.getAllCategories=async(req,res)=>{
    try{
        const allCategories=await Category.find()
        res.json(allCategories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
categoryCltr.deleteCategory=async(req,res)=>{
    try{
        const categoryId=req.params
        const deletedCategory=await Category.findByIdAndDelete(categoryId)

    } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
module.exports=categoryCltr