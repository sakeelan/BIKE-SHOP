const Bike=require('../models/bikedb')



const findonebike=async(req,res)=>{
    const{id}=req.params;
    const bike= await Bike.findById({_id:id});
    if (bike==null) {
        res.redirect('/')
        
    }else{
        res.render('specification',{bike:bike,h1:"EDIT EMPLOYEE "})
    }
}

const newbike=async(req,res)=>{
    const{bname,model,tyre,brake,fuel,color,cc,img,price}=req.body;
    const bike=new Bike({bname,model,tyre,brake,fuel,color,cc,img,price})
    await bike.save();
    res.render('addbike',{h1:"USER LOG TO SHOP "})
}


const buybike=async(req,res)=>{
    const{id}=req.params;
    const bike= await Bike.findById({_id:id});
    if (bike==null) {
        res.redirect('/')
        
    }else{
        res.render('buybike',{bike:bike,h1:"EDIT EMPLOYEE "})
    }
}

const findbike=async(req,res)=>{

    const bike=await Bike.find({}).sort({createdAt:-1});
    res.render('product',{bike:bike, h1:"BUY YOUR BIKES"})
}


module.exports={findonebike,newbike,buybike,findbike}