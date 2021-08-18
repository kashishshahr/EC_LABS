
var express=require('express');
var router=express.Router();
var data=require('../data/candidateData');

//Home
router.get('/',function(req,res){
    res.render('index');
});
//Sumarry Page
router.get('/summary',function(req,res){
    res.render('pages/summary',{list:data.getCandidate()});
});

//Result Page
router.get('/result',function(req,res){
    var c=data.getWinner();
    console.log("winner:");
    console.log(c);
    res.render('pages/result',{winner:c});
});

module.exports=router;