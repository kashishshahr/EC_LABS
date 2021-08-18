let candidates={};
let voters={};
module.exports = {
   getCandidate(id,name){
       if(candidates)
       {
        //    console.log("Getcandidate:");
        //   console.log(candidates);
        //   console.log(Object.keys(candidates).length);
          return candidates;  
       }
       else
       {
            return null;
       }
   },
   addCandidate(id,name){
       let candidate={id:id,name:name,votes:0};
       if(candidates[id]!=name)
       {
        candidates[id]=candidate;
        return true;
       }
       else
            return false;
   },
   AlreadyVoted(vId)
   {
       return voters[vId];
   },
   AlreadyACandidate(cId)
   {
       if(candidates[vid]!=undefined)
       return true;
       else false;
   }
   ,
   voteCandidate(vId,cId)
   {
    if (voters[vId] == undefined) {
        voters[vId] = 1;
        if (candidates[cId].votes == 0) {
            candidates[cId].votes = 1;
            
        } else {
            candidates[cId].votes++;
        }
        return 1;
    } else {
        return 0;
    }
   },
   getWinner()
   {
       var max=-1;
       var winner=null;
    //    console.log("Winndeerrrr");
    //    console.log(candidates);
       for(var c in candidates)
       {
        //    console.log(c);
           if(candidates[c].votes>max)
           {
               max=c.votes;
               winner=candidates[c];
           }
       }
       return winner;
   },
   getCandidateById(id)
   {
       return candidates[id];
   }
   ,getVoterById(id)
   {
       return voters[id];
   }

}