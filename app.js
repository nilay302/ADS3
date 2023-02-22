const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pool = require('./config/db');
const studentRoutes = require('./api/routes/Students');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-type, Accept, Authorization");
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/students', studentRoutes);

module.exports = app;