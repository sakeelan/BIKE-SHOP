const mongoose=require('mongoose')


const adminsch=new mongoose.Schema({

    aname:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
    password:{
        type:String
    }
})
const Admin=mongoose.model('admin',adminsch);
module.exports=Admin;