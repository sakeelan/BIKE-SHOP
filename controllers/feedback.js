const Feedback=require('../models/feedbackdb')
const Customer=require('../models/customerdb')


const findfeed=async(req,res)=>{
    const feed=await Feedback.find({}).sort({createdAt:-1});
    res.render('viewfeedback',{feed:feed,h1:"FEEDBACK CUSTOMER & STARS "})
}


const newfeed=async(req,res)=>{
    const{cname,email,bname,model,star,complaint}=req.body;
    try {
        const check=await Customer.findOne({email:req.body.email})
        if (check) {

            const user=new Feedback({cname,email,bname,model,star,complaint});
            await user.save();
            res.render('sendfeedback',{h1:`THANK YOU ${cname}`})
        }else{
            res.render('feedbackfail',{h1:cname})
        }
       } catch (error) {
        res.render('404')
       }
}

const deletefeed=async(req,res)=>{
    const {id}=req.params;
const feeddelete=await Feedback.findByIdAndDelete({_id:id});
if(!feeddelete){
    res.render('404')
}else{
    res.redirect('/viewfeedback' )
} }


module.exports={findfeed,newfeed,deletefeed};