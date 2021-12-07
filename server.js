const dotenv = require('dotenv');
const path = require("path");
dotenv.config({
    path:"config.env"
});
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 8080;

const CSS_PATH = path.join(__dirname,'assets/css');
const JS_PATH = path.join(__dirname,'assets/js');
const IMAGES_PATH = path.join(__dirname,'assets/images');
const PartialsPath = path.join(__dirname,'views/partials');

console.log(PartialsPath);
//this is used for log form server reqest
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','hbs');

//include assets
app.use('/css',express.static(CSS_PATH));
app.use('/js',express.static(JS_PATH));
app.use('/css',express.static(CSS_PATH));
app.use('/images',express.static(IMAGES_PATH));
app.use('/fonts',express.static(path.join(__dirname,'assets/fonts')))

//register partials 
hbs.registerPartials(PartialsPath)

//routes
app.use('/',require(path.join(__dirname,'server/routes/route')))

app.listen(PORT,()=>{
    console.log(`Sever is listening ${PORT}`)
});