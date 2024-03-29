const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO ERROR!!!!!!");
        console.log(err);
    }))

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual(
    'fullName')
    .get(function () {
        return `${this.first}${this.last}`
    })
    .set(function (v) {
        const fullNameArray = v.split(' ');
        this.first = fullNameArray[0];
        this.last = fullNameArray[1];
    })
//The split() method in JavaScript is used to split a string into an array of substrings based on a specified separator and returns the new array.

personSchema.pre('save',async function (){
    this.first='YO';
    this.last='MAMA';
    console.log("ABOUT TO SAVE!!");
})
personSchema.post('save',async function(){
    console.log('JUST SAVED!!');
})

const Person = mongoose.model('Person', personSchema);

