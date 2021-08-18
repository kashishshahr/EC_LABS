var express=require('express');
var router=express.Router();
var data=require('../data/candidateData');
//Adding Page

router.get('/',function(req,res){
    res.render('pages/addcandidate',{message:""});
});

router.post('/',function(req,res){
    //add Candidate


    var q=data.addCandidate(req.body.studentId,req.body.studentName);
    var m="";
    if(q)
    {
        m="User Registered Successfully";
        res.redirect("/vote");
    }
    else
    {
        m="User Already Registered";
        res.render("pages/addcandidate",{message:m});
    }

     
});

module.exports=router;