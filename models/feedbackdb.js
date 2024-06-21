
const mongoose=require('mongoose')


const feedbacksch=new mongoose.Schema({

    cname:{
        type:String
    },
    email:{
        type:String
    },
    bname:{
        type:String
    },
    model:{
        type:String
    },
    star:{
        type:String
    },
    complaint:{
        type:String
    },
   

},{timestamps:true});
const Feedback=mongoose.model('feedback',feedbacksch);
module.exports=Feedback;