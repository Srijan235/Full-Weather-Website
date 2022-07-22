const express = require('express');
const app = express();
const port =3000;
const path= require("path");
const hbs=require('hbs');


const parpath =(path.join(__dirname,'/partials'));
const spath= (path.join(__dirname,'/public'));
// console.log(spath);
 app.use(express.static(spath));
 app.set('view engine','hbs');
 hbs.registerPartials(parpath);

app.get('/', function (req, res) {
  res.render('index');
   
})

app.get('/about', function (req, res) {
    res.render("about");
  })

  app.get('/weather', function (req, res) {
    res.send('Welcome to the weather page');
  })

  app.get('*', function (req, res) {
    res.render('404',{
      error : "OOPS! Page not found !"
    })
  })

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});