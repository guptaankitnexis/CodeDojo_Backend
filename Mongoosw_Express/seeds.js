const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand ')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!!!");
        console.log(err);
    }))
// const p =new Product({
//     name:'Ruby GrapeFruit',
//     price:1.99,
//     category:'fruit'
// })
// p.save().then(p =>{
//     console.log(p);
// })
// .catch(e =>{
//     console.log(e);
// })

const seedProducts = [
    {
        name: 'Apple',
        price: 1.50,
        category: 'fruit'
    },
    {
        name: 'Carrot',
        price: 0.75,
        category: 'vegetables'
    },
    {
        name: 'Milk',
        price: 2.25,
        category: 'dairy'
    },
    {
        name: 'Banana',
        price: 1.20,
        category: 'fruit'
    },
    {
        name: 'Broccoli',
        price: 1.00,
        category: 'vegetables'
    },
    {
        name: 'Cheese',
        price: 3.50,
        category: 'dairy'
    },
    {
        name: 'Orange',
        price: 1.75,
        category: 'fruit'
    }
];

Product.insertMany(seedProducts)
    .then((result) => {
        console.log('Products inserted successfully:', result);
    })
    .catch((error) => {
        console.error('Error inserting products:', error);
    });
