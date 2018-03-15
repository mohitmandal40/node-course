const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT ||  3000;
var app = express();



// to reuse the code we use registerPartials 
hbs.registerPartials(__dirname + '/views/partials')
app.set('views engine','hbs');


hbs.registerHelper('getFullYear',() => {
    return new Date().getFullYear();
});

// app.use((req,res,next) => {
//     var now = new Date().toString();
//     console.log(`${now}: ${req.method} ${req.url}`);
//     next();
// })

// app.use((req,res,next) => {
//     res.render('maintainence.hbs',{
//         text : 'we will be right back',
//         para : 'this is the paragraph'
//     })
// })

//for simple routing of pages & render static data
app.use(express.static(__dirname + '/public'))


app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle : 'home page',
        welcome : 'welcome to home page'
    })
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle : 'about page'
    });
})

app.get('/bad',(req,res) => {
    res.send({
        errorMsg : 'unable to find request'
    });
})

app.get('/projects',(req,res) => {
    res.render('project.hbs',{
        pageTitle : 'my portfolio'
    })
})

app.listen(port,() => {
    console.log(`port is serving on ${port}`);
});