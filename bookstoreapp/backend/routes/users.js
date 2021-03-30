var express = require('express');
var router = express.Router();
var book= require('../services/book')
function authMiddleware(req,res,next){
  if(req.session.currentUser()){
    next();
  }
else{
 //next({message:"user not authenticated"});
 res.status(401).send({message:"Please login"})
}
}
/* GET users listing. */
router.get('/', function(req, res) {

  var result= Book.getUsers()
  res.send(result);
});
 router.post('/register', function(req, res) {
 console.log("in router register")
  let usname = req.body.username;
  let pwd = req.body.password;
  let confirmPassword = req.body.confirmPassword;
  let acno = req.body.accountno;
  
   if (pwd != confirmPassword) {
    res.status(400).send({message:"Password and confirm password doesnot match"});
      
  }
  else {
    book.addUser(usname,pwd,acno)
      .then(data=>{
        res.status(data.statusCode).send({message: data.message});
      })
     }
 })
 router.post('/addbook', function(req, res) {
  
   let title = req.body.title;
   let price = req.body.price;
 
   {
     book.addbook(title,price)
       .then(data=>{
         res.status(data.statusCode).send({message: data.message});
       })
      }
  })

  router.post('/addNewbook',function(req,res){
    console.log("programRouter - createNewBook"); 
  
   let title=req.body.title;
   let price=req.body.price;
   let imagePath=req.body.imagePath;
   let image=req.body.image;
  
   book.createNewBook(title,price,imagePath,image)
   
   .then(data=>{
      res.status(data.statusCode).send({message:data.message});
    }) 
  })

router.post('/getAllBooks', function(req, res) {
  console.log("in backend router--getAllboioks")
      book.getAllBooks()
        .then(data=>{
          res.status(data.statusCode).send({message: data.message,books:data.books});
      
       })
   })
   router.post('/getBooksByTitle', function(req, res) {
     
    console.log("bookRouter - getBooksByTitle"); 
    let title=req.body.title;
    book.getBooksByTitle(title)
   // book.k(title)
    .then(data=>{
      res.status(data.statusCode).send({message:data.message,books:data.books});
    });
  });
  
  








  //  router.post('/getAllBooks', function(req, res) {
  //   book.gettAllbooks()
  //   .then(data=>{
  //     res.status(data.statusCode).send({message:data.message,books:data.books});
  //   });
  // });



router.post('/login',function(req, res) {
  
  let username=req.body.username;  
  let password=req.body.password;
  console.log(username,password)
  book.login(username,password)
  .then(data=>{
    if(data.statusCode==200){
      req.session.currentUser=username;
    }
    res.status(data.statusCode).send({
      message:data.message,
      record:data.record});
  }) 
  
})

router.post('/home',authMiddleware, function(req, res, next) {
  let uname = req.body.username;
  let amt = Number(req.body.amount);
  let value=req.body.value;
  
  let data = Book.getUsers();
   
  // let bal = document.querySelector("#bal");
  if (uname in data) {
    if(uname!=Book.req.session.currentUser){
      next("error");
      return res.send({message:"invalid username"})
    }
    if(amt>data[uname]["balance"]){
      return res.status(400).send({message:"insufficient balance"})
     } 
     data[uname]["balance"] -= amt;
      let bal = data[uname]["balance"]
      amount:amt
    
       res.send({balance:bal,message:"Payment sucessfull and vehicle choosen is "+value})
    }

  else {
    res.status(400).send({message:"invalid user"});
}
  
});

  router.get('/test/:id', function(req, res) {
    res.send(req.query.id);
    });

module.exports = router;
