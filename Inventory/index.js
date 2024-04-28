const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

// Serve static files from the public directory  
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const groceryCategories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Baby Care",
    "Bakery",
    "Pantry Staples",
    "Snacks & Sweets",
    "Beverages",
    "Frozen Foods",
    "Household & Cleaning",
    "Personal Care & Health"
];

const Product = require('./models/productSchema.js');

mongoose.connect('mongodb://127.0.0.1:27017/inventory ')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!!!");
        console.log(err);
    }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product, groceryCategories })
})

// Route to render the form to add a new product
// app.get('/products/new', (req, res) => {
//     res.render('products/new', { groceryCategories });
// });

// app.put('/products/:id', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findOneAndUpdate(id, req.body, { runValidators: true, new: true })
//     res.redirect(`/products/${product._id}`)
// });
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate(
            { _id: id },
            req.body,
            { runValidators: true, new: true }
        );

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.redirect(`/products/${product._id}`);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/products/:id',async(req,res)=>{
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



// Route to handle submission of the form to create a new product
app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log('New product:', newProduct);
        res.redirect(`/products/${newProduct._id}`);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Internal Server Error');
    }
});













app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000!');
})  