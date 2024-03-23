const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO ERROR!!!!!!");
        console.log(err);
    }))