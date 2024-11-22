const mongoose=require("mongoose")
const Product=require('../models/Product')
const Category=require('../models/Category')
const productCltr={}
productCltr.addProduct=async(req,res)=>{
    try{
        const categoryId=req.params.categoryId
        const {name,description,price,image,stock}=req.body
        const existedCategory=await Category.findById(categoryId)
        if(!existedCategory){
            return res.status(404).json({ message: 'Category not found.' });
        }
        const newProduct=new Product({name,description,price,image,stock,category:categoryId})
        await newProduct.save()
        res.status(201).json(newProduct);
    }catch(e){
        res.status(400).json({ error: error.message });
    }
}
productCltr.updateProduct = async (req, res) => {
    try {
      const { productId } = req.params; // Get the product ID from the request URL
      const body = req.body; // Get the updated fields from the request body
  
      // Update the product and return the updated document
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        body,
        { new: true, runValidators: true } // Return the updated document and run validators
      );
  
      // Check if the product exists
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found.' });
      }
  
      // Send a success response
      res.status(200).json({
        message: 'Product updated successfully.',
        product: updatedProduct,
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({ message: 'Error updating product.', error: error.message });
    }
  };   

module.exports=productCltr