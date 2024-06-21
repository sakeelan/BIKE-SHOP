const Customer=require('../models/customerdb')

const newcustomer=async(req,res)=>{
    try {
        const{cname,email,phone,address,bname,model,date,price}=req.body;
        const cus= new Customer({cname,email,phone,address,bname,model,date,price});
        await cus.save()
        res.render('success',{h1:cname})
        
    } catch (error) {
        res.send("ORDER FAILED ")
    }
}


const findcustomer=async (req,res)=>{
    const cus=await Customer.find({}).sort({createdAt:-1});
    res.render('customerdet',{h1:"ALL CUSTOMER DETAILS",cus:cus})
}


module.exports={newcustomer,findcustomer};