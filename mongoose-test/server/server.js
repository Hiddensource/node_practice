const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const routes = require('./routes/router');



var app = express();
var port = process.env.PORT|| 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(routes);



app.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
});
