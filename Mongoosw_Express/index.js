const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const Product = require('./models/product.js');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand ')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!!!");
        console.log(err);
    }))

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const categories = ['fruit','vegetables','dairy'];

app.get('/products',async(req,res) =>{
    const products = await Product.find({})
    res.render('products/index',{products})
})

app.get('/products/:id',async(req,res) =>{
    const {id} = req.params;
    const product =  await Product.findById(id)
    res.render('products/show',{product})
})

app.get('/products/:id/edit',async(req,res) =>{
    const {id} = req.params;
    const product =  await Product.findById(id)
    res.render('products/edit',{product})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})

app.put('/products/:id', async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findOneAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${product._id}`)
})

app.post('/products',async(req,res)=>{
    const newProduct = new Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.redirect(`/products/${newProduct._id}`)
    
})

app.delete('/products/:id',async(req,res)=>{
    res.send("YOU MADE IT!")
})


app.listen(3000,() => {
    console.log('APP IS LISTENING ON PORT 3000!');
})  