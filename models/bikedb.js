const mongoose=require('mongoose')


const bikesch=new mongoose.Schema({

    bname:{
        type:String
    },
    model:{
        type:String
    },
    tyre:{
        type:String
    },
    brake:{
        type:String
    },
    color:{
        type:String
    },
    fuel:{type:String

    },
    cc:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:String
    },
    
},{ timestamps:true});

   

    

const Bike=mongoose.model('addbike',bikesch);
module.exports=Bike;