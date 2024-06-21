const Employee=require('../models/employeedb')



const createemp=async(req,res)=>{
    try {
        const{eid,ename,gender,phone,dep,salary}=req.body;
        const emp= new Employee({eid,ename,gender,phone,dep,salary});
        await emp.save()
        res.redirect('/findemp',)
        
    } catch (error) {
        res.send("not store")
    }}


const findemp=async(req,res)=>{
    const emplo=await Employee.find({}).sort({createdAt:-1});
    res.render('employeedet',{emplo:emplo, h1:'UPLOAD NEW EMPLOYEE'})
}


const findoneemp=async(req,res)=>{

    const{id}=req.params;
    const emp= await Employee.findById({_id:id});
    if (emp==null) {
        res.redirect('/')
        
    }else{
        res.render('empupdate',{emp:emp,h1:"EDIT EMPLOYEE "})
    }
}


const updateemp=async(req,res)=>{
    const {id}=req.params;

    const {eid,ename,gender,phone,dep,salary}=req.body;

    const updateuser=await Employee.findByIdAndUpdate({_id:id},{eid,ename,gender,phone,dep,salary})

    if(!updateuser){
        res.status(200).json({message:"user not found"})
    }else{
        res.redirect('/findemp')
}

}


const deleteemp=async(req,res)=>{
    const {id}=req.params;
const deleteuser=await Employee.findByIdAndDelete({_id:id});
if(!deleteuser){
    res.render('404')
}else{
    res.redirect('/findemp' )
} }


module.exports={createemp,findemp,findoneemp,updateemp,deleteemp};