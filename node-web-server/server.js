const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = (`${now}: ${req.method} ${req.url}`);
    fs.appendFileSync('server.log',log + '\n');
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintainance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});



app.get('/', (req, res) => {
    // res.send('<h1>Hello</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome to abc'
    });
});

app.get('/about', (req, res) => {
    // res.send('<h1>Hello</h1>');
    res.render('about.hbs', {
        pageTitle: 'About page'
    });
});

app.get('/bad', (req, res) => {
    // res.send('<h1>Hello</h1>');
    res.statusCode = 400;
    res.send('Error : 400 Bad Request');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});