
const Admin=require('../models/admindb')



const log=async(req,res)=>{
    const{aname,phone,address,password}=req.body;
    const admin=new Admin({aname,phone,address,password})
    await admin.save()
    
    res.render('adminlog',{h1:"CREATE YOUR ADMIN PROFILE"})
}


const sign=async(req,res)=>{
    try {
     const check=await Admin.findOne({aname:req.body.aname})
     if (check.password===req.body.password) {
         res.redirect('/adminmain')
     }
    } catch (error) {
     res.render('404')
    }
}

module.exports={log,sign}