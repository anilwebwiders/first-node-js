const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.render('index')
});

route.get('/index-car',(req,res)=>{
    res.render('index-car')
});

route.get('/directory',(req,res)=>{
    res.render('directory')
});

route.get('/categories',(req,res)=>{
    res.render('categories')
});

route.get('/details',(req,res)=>{
    res.render('details')
});

route.get('/faq',(req,res)=>{
    res.render('faq')
});

route.get('/about-us',(req,res)=>{
    res.render('about-us')
});

route.get('/contact-us',(req,res)=>{
    res.render('contact-us')
});

route.get('/ad-post',(req,res)=>{
    res.render('ad-post')
});

route.get('/ad-post-details',(req,res)=>{
    res.render('ad-post-details')
});

route.get('/categories-main',(req,res)=>{
    res.render('categories-main')
});

route.get('/details',(req,res)=>{
    res.render('details')
});

route.get('/my-ads',(req,res)=>{
    res.render('my-ads')
});

route.get('/my-profile',(req,res)=>{
    res.render('my-profile')
});

route.get('/favourite-ads',(req,res)=>{
    res.render('favourite-ads')
});

route.get('/archived-ads',(req,res)=>{
    res.render('archived-ads')
});

route.get('/pending-ads',(req,res)=>{
    res.render('pending-ads')
});

route.get('/published',(req,res)=>{
    res.render('published')
});

route.get('/delete-account',(req,res)=>{
    res.render('delete-account')
});

route.get('/published',(req,res)=>{
    res.render('published')
});

route.get('/signin',(req,res)=>{
    res.render('signin')
});

route.get('/faq',(req,res)=>{
    res.render('faq')
});

route.get('/coming-soon',(req,res)=>{
    res.render('coming-soon')
});

route.get('/coming-soon',(req,res)=>{
    res.render('coming-soon')
});

route.get('/500-page',(req,res)=>{
    res.render('500-page')
});


route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/category',(req,res)=>{
    res.render('category')
});

route.get('/*',(req,res)=>{
    res.status(404).render('404-page')
});

module.exports = route;