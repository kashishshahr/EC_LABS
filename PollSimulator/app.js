const express=require('express');
const path=require('path');
const app=express();
var cors=require('cors');
const hostname='127.0.0.1';
const port=process.env.PORT||3000;

var indexRouter = require('./routes/index_router');
var candidateRouter = require('./routes/candidate_router');
var voteRouter = require('./routes/vote_router');

// var usersRouter = require('./routes/user_router');


app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/summary', indexRouter);
app.use('/result', indexRouter);
app.use('/add', candidateRouter);
app.use('/vote', voteRouter);
// app.use('/users', usersRouter);


app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;