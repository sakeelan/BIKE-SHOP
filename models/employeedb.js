const mongoose=require('mongoose')


const employeesch=new mongoose.Schema({

    eid:{
        type:String
    },
    ename:{
        type:String
    },
    gender:{
        type:String
    },
    phone:{
        type:Number
    },
    dep:{
        type:String
    },
    salary:{
        type:String
    }

})
const Employee=mongoose.model('employee',employeesch);
module.exports=Employee;