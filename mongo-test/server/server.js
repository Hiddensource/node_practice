var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });

});

app.get('/todos',(req,res)=>{
    Todo.find({}).then((docs)=>{
        res.send({docs});
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports={app};