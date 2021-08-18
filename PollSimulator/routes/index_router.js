
var express=require('express');
var router=express.Router();
// var data=require('../data/votes');

//Home
router.get('/',function(req,res){
    res.render('index');
});
//Sumarry Page
router.get('/summary',function(req,res){
    
    res.render('pages/summary');
});

//Result Page
router.get('/result',function(req,res){
    res.render('pages/result');
});

module.exports=router;