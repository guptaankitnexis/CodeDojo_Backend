const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch((err => {
        console.log("OH NO ERROR!!!!!!");
        console.log(err);
    }))



// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("CONNECTION OPEN!!");
// }); 

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

// amadeus.save()   

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: '' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: '' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: '' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED0");
//         console.log(data);
//     })