const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const db = require("./db");
const collection = "user";
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://whatsnews:alishamc@cluster0-ndzcp.mongodb.net/test?retryWrites=true";

//app.use(express.static(__dirname + '/static'));
app.use(express.static(path.join('css', 'public')));
app.use(bodyParser.json());

app.get('/', function(req,res){
    console.log("GET");
<<<<<<< HEAD
    res.redirect('/signin');
    // res.sendFile(path.join(__dirname,"signin.html"));
});
// app.get('/signin', (req, res)=>{
//     console.log("GETsignin");
//     //res.redirect('/main');
//     // console.log(req);
//     // console.log(req._parsedOriginalUrl.path);

//     res.sendFile(path.join(__dirname,"signin.html"));
=======
    res.sendFile(path.join(__dirname,'signup.html'));
    
});
app.get('/main', (req, res)=>{
    console.log("GETergergerge");
    res.sendFile(path.join(__dirname,'main.html'));
})
app.get('/flag', (req, res)=>{
    console.log("FLAG");
    res.sendFile(path.join(__dirname,'flag.html'));
})

// app.get('/auth',(req,res)=>{
//     const userInput = req.body;
//     MongoClient.connect(url, function(err, client){
//         const db = client.db("mydb");
//         var cursor = db.collection("users").findOne({email : userInput.email} & {password : userInput.password});
//         if(cursor){
//             res.sendFile(path.join(__dirname,'main.html'));
//         }
//     });
>>>>>>> 87451c894d9563b1b2f969fe6023f7668a9d5ee4
// });

app.get('/signup', (req, res)=>{
    console.log("GETsignup");
    res.sendFile(path.join(__dirname,'signup.html'));
});

app.get('/main', function(req, res){
    console.log("GETergergerge");
    res.sendFile(path.join(__dirname,'main.html'));
    console.log("GETergergerge");
    //res.sendFile(path.join(__dirname,'main.html'));
});

app.post('/signup', function(req,res, next){
    // Document to be inserted

    const userInput = req.body;
    
    MongoClient.connect(url, { useNewUrlParser: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        var document = dbo.collection("users").findOne({email : userInput.email}, function(err,resi){
            console.log(resi);
            if(!resi){
                dbo.collection("users").insertOne(userInput, function(err, res1) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    //return res.sendFile(path.join(__dirname,'/main'));
                    res.redirect('localhost:7098/main');
                    db.close();
                });
            }
        });
        
      });
});

<<<<<<< HEAD
app.get('/signin', function(req, res, next){
    console.log("GETsignin")
    res.sendFile(path.join(__dirname,'signin.html'));
})
    

=======
app.post('/flag', function(req, res, next){
    // Document to be inserted
    console.log("SAVE");
    const newsArticle = req.body;
    MongoClient.connect(url, { useNewUrlParser: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("news").insertOne(newsArticle, function(err, res1) {
            if (err) throw err;
            console.log("1 news article inserted");
            // res.sendFile(path.join(__dirname,'main.html'));
            db.close();
        });
      });
      console.log("yassasasasasa")
});
>>>>>>> 87451c894d9563b1b2f969fe6023f7668a9d5ee4

app.post('/signin', function(req, res, next){
    // Document to be inserted
    console.log("POSTsignin");
    const userInput = req.body;
    MongoClient.connect(url, { useNewUrlParser: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
<<<<<<< HEAD
=======
     //   localStorage.setItem("emailId",userInput.email);
>>>>>>> 87451c894d9563b1b2f969fe6023f7668a9d5ee4
        var document = dbo.collection("users").findOne({email : userInput.email, password : userInput.password}, function(err,resi){
            if(resi){
                console.log(resi);
                return res.redirect('/main');
                // return res.sendFile(path.join(__dirname,'/main'));
                //    return res.redirect('/main'); 
            }
            
        });
    });
    
});
        

db.connect((err)=>{
    // If err unable to connect to database
    // End application
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else{
<<<<<<< HEAD
        app.listen(7098,()=>{
            console.log('connected to database, app listening on port 7098');
=======
        app.listen(7800,()=>{
            console.log('connected to database, app listening on port 7800');
>>>>>>> 87451c894d9563b1b2f969fe6023f7668a9d5ee4
        });
    }
});

//==================================================================

// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// var url = "mongodb+srv://whatsnews:alishamc@cluster0-ndzcp.mongodb.net/test?retryWrites=true";
// var authRoutes = require('./routes/index');
// var app = express();

// mongoose.connect(url, {
//     useMongoClient = true
// });




