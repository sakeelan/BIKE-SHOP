const mongoose=require('mongoose')


const customersch=new mongoose.Schema({

    cname:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    bname:{
        type:String
    },
    model:{
        type:String
    },
    date:{
        type:String
    },
    price:{
        type:String
    },
},{timestamps:true});
const Customer=mongoose.model('customer',customersch);
module.exports=Customer;