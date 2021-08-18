
var express=require('express');
var router=express.Router();


//Voting page
router.get('/',function(req,res){
    console.log("Get For Vote");
    res.render('pages/vote');
});
//Vote Add
router.post('/',function(req,res){
    //Vote here
        console.log("Post For Vote");
    // res.render('pages/vote');
});

module.exports=router;
