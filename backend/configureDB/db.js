const mongoose=require("mongoose")
const configureDB=async(req,res)=>{
    try{
        await mongoose.connect('mongodb+srv://krishnalasyatalluri9:sUPpKpDk3bdo0UjG@goods.muzsl.mongodb.net/?retryWrites=true&w=majority&appName=goods'

        
        )
        console.log('db connected')
        
    }catch(e){
        console.log(e.message)
    }
}
module.exports=configureDB