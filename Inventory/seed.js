const mongoose = require('mongoose');

const Product = require('./models/productSchema');

mongoose.connect('mongodb://127.0.0.1:27017/inventory ')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!!!");
        console.log(err);
    }))

    const productsToInsert = [
        {
          name: 'Apple',
          category: 'Fruits',
          description: 'Fresh and juicy apples',
          price: 1.5,
          quantity: 10
        },
        {
          name: 'Carrot',
          category: 'Vegetables',
          description: 'Organic carrots',
          price: 0.75,
          quantity: 20
        },
        {
          name: 'Milk',
          category: 'Dairy',
          description: 'Fresh whole milk',
          price: 2.25,
          quantity: 5
        },
        {
          name: 'Diapers',
          category: 'Baby Care',
          description: 'Soft and absorbent diapers',
          price: 15.99,
          quantity: 30
        },
        {
          name: 'Whole Wheat Bread',
          category: 'Bakery',
          description: 'Nutritious whole wheat bread',
          price: 3.49,
          quantity: 15
        },
        {
          name: 'Rice',
          category: 'Pantry Staples',
          description: 'Long grain rice',
          price: 4.99,
          quantity: 25
        },
        {
          name: 'Potato Chips',
          category: 'Snacks & Sweets',
          description: 'Crunchy potato chips',
          price: 1.99,
          quantity: 50
        },
        {
          name: 'Orange Juice',
          category: 'Beverages',
          description: 'Freshly squeezed orange juice',
          price: 3.75,
          quantity: 8
        },
        {
          name: 'Frozen Pizza',
          category: 'Frozen Foods',
          description: 'Delicious frozen pizza',
          price: 6.99,
          quantity: 12
        },
        {
          name: 'Laundry Detergent',
          category: 'Household & Cleaning',
          description: 'Powerful laundry detergent',
          price: 8.49,
          quantity: 10
        },
        {
          name: 'Toothpaste',
          category: 'Personal Care & Health',
          description: 'Minty fresh toothpaste',
          price: 2.99,
          quantity: 20
        }
      ];
      
      Product.insertMany(productsToInsert)
      .then((result) => {
          console.log('Products inserted successfully:', result);
      })
      .catch((error) => {
          console.error('Error inserting products:', error);
      });