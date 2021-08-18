
var express=require('express');
var router=express.Router();
var data=require('../data/candidateData');

//Voting page
router.get('/',function(req,res){
    var l=data.getCandidate();
    var len=Object.keys(l).length;
    console.log(l);
    res.render('pages/vote',{list:l,len:len});
});
//Vote Add
router.post('/',function(req,res){
    if(!data.AlreadyVoted(req.body.studid))
    {
        var list=data.voteCandidate(req.body.studid,req.body.cId);
        console.log("Successs");
        res.redirect('/summary');
    }else{
        console.log("Already registered");
        // res.json({show:0});
        res.redirect("/summary");
    }
});

module.exports=router;

