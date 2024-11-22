const mongoose=require('mongoose')
const jwt=require("jsonwebtoken")
const authMiddleware=async(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({ message: 'Access denied' });
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decoded
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token', error: error.message });
    }
}
module.exports=authMiddleware