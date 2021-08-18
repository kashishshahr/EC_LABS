var express=require('express');
var router=express.Router();
//Adding Page

router.get('/',function(req,res){
    
    res.render('../views/pages/addcandidate');
});

router.post('/',function(req,res){
    //add Candidate
    console.log("Post For Adding Candidate");
    res.render('../views/pages/pages/addcandidate');
});

module.exports=router;