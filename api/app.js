const express = require('express');
const app = express();
const morgan = require('morgan');
//const mongoose = require('mongoose');
//const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const cors = require('cors');

//import routes 
const userRouter = require('./routes/users');

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator());
app.get("/api",(req,res)=>{
    fs.readFile("docs/apiDocs.json",(error,data)=>{
        if(error){return res.status(400).json({error:error})}
        res.json(JSON.parse(data));
    })
});

//app.use('/api',postRouter);
//app.use('/api',authRouter);
app.use('/api/', userRouter);



app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({error:'invalid token...'});
    }
    next()
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>{console.log(`app listening to port ${port}`)});