const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cors = require('cors');
const path=require('path')

/////////////CONTROLLERS admin,customer,employee,bikes,feedback, 
const {log,sign}=require('./controllers/admin')
const {createemp,findemp,findoneemp,updateemp,deleteemp}=require('./controllers/employee');
const { findonebike, buybike, newbike, findbike } = require('./controllers/bike');
const { findfeed, newfeed, deletefeed } = require('./controllers/feedback');
const { findcustomer, newcustomer } = require('./controllers/customer');
//////////////////////////////////////////////////////

//////////////MIDDLEWARE APP FUNCTIONS//////////////////////////
app.use(cors({ Origin: 'http://127.0.0.1:5000'}));
app.use(express.json());
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))
//////////////////////////////////////////////////////


////////////HOME ROUTER//////////////////////
app.get('/', (req,res)=>{
    res.render('main')
})
//////////////////////////////////////////


////////////EMPLOYEE DETAILS CRUD VALUES///////////////////////////
app.get('/findemp', findemp)

app.post('/employeedet', createemp)

    app.get('/empupdate/:id', findoneemp)

    app.get('/empdelete/:id', deleteemp)

app.post('/empupdate/:id', updateemp)

app.get('/newemployee',(req,res)=>{
    res.render('newemployee',{h1:"NEW EMPLOYEE"})
})
app.get('/employeedet',(req,res)=>{
    res.render('employeedet', {h1:"EMPLOYEE DETAILS"})
})
///////////////////////////////////////////////////////////////////////////

///////////////CUSTOMER FIND, CREATE, ////////////////////////////
app.get('/customerdet',findcustomer)

app.post('/success',newcustomer)


////////////////////////////////////////////////


////////////BIKE BUY, FINDALL, FINDONE, ADDBIKE details/////////////////////////////////

app.get('/product',findbike)

app.get('/findonebike/:id',findonebike)

app.get('/buybike/:id',buybike)

app.post('/newbike',newbike)

app.get('/bikedet', (req,res)=>{
    res.render('bikedet',{h1:"ALL BIKES DETAILS"})
})
app.get('/addbike', (req,res)=>{
    res.render('addbike',{h1:"ADD NEW BIKES "})
})

/////////////////////////////////////////////////////

/////////////////FEEDBACK CREATE, FIND, DELETEFEEDBACK, FINDONE//////////////////////

app.get('/viewfeedback',findfeed)
app.post('/givefeed',newfeed)

app.get('/feeddelete/:id',deletefeed)

app.get('/feedback', (req,res)=>{
    res.render('feedback',{h1:"GIVE YOUR FEEDBACK"})
})

//////////////////////////////////////////////////////////////////////////



// ///////////////USER LOGIN < SIGNIN DETAILS///////////////////////////////////
// app.get('/userlog', (req,res)=>{
//     res.render('userlog',{h1:"USER LOG TO SHOP "})
// })
// app.get('/usersign', (req,res)=>{
//     res.render('usersign',{h1:"CREATE YOU PROFILE"})
// })

// app.post('/userlog',async(req,res)=>{
//     const{cname,cage,email,phone,address,password}=req.body;
//     const user=new Customer({cname,cage,email,phone,address,password})
//     await user.save();
//     res.render('userlog',{h1:"USER LOG TO SHOP "})
// })

// app.post('/products',async(req,res)=>{
//     try {
//      const user=await Customer.findOne({cname:req.body.cname})
//      if (user.password==req.body.password) {
//          res.render('product')
//      }
//     } catch (error) {
//      res.render('404')
//     }
// })

//////////////////////////////////////////////////////////////////


/////////ADMIN CREATE, FINDONE method/////////////////////
app.post('/adminlog',log)

app.post('/adminmain',sign )

app.get('/adminmain', (req,res)=>{
    res.render('adminmain')
})    
app.get('/adminlog',(req,res)=>{
    res.render('adminlog',{h1:"ADMIN LOG TO MAIN"})
})
app.get('/adminsign',(req,res)=>{
    res.render('adminsign',{h1:"CREATE YOUR ADMIN PROFILE"})
})
//////////////////////////////////////////////////////




///////////////////ANCHOR TAG NAV BAR/////////////////////////////////////
app.get('/contact', (req,res)=>{
    res.render('contact',{h1:"CONTACT AND COLLECT"})
})

app.get('/about', (req,res)=>{
    res.render('about',{h1:"INFORMATION BY SHOP"})
})
app.post("/success",(req,res)=>{
    res.render('success')
})
////////////////////////////////////////////////////////////



const dbs="mongodb://localhost:27017/bike";

mongoose.connect(dbs) 
  .then((result) =>{ console.log("Database connected");
  app.listen(5000, ()=>{
    console.log("server run in 5000");
})})


