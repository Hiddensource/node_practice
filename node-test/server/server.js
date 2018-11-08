const express =require('express');

var app = express();

app.get('/',(req,res)=>{
    
    res.send('Hello world');
});


app.listen(3000,()=>{
    console.log('Server linstening on port 3000');
});

module.exports.app=app;