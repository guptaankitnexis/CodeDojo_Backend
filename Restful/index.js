const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
// import { v4 as uuid } from 'uuid';
const { v4: uuid } = require('uuid');



// Serve static files from the public directory  
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id: uuid(),
        username: "johndoe",
        comment: "Beautiful picture! 😍"
    },
    {
        id: uuid(),
        username: "sara_89",
        comment: "Where was this taken? It looks amazing!"
    },
    {
        id: uuid(),
        username: "traveler_kate",
        comment: "Wish I could visit this place someday!"
    },
    {
        id: uuid(),
        username: "foodie_alex",
        comment: "Looks delicious! Recipe please?"
    },
    {
        id: uuid(),
        username: "fitness_jenny",
        comment: "Love your healthy lifestyle!"
    },
    {
        id: uuid(),
        username: "art_lover",
        comment: "Incredible artwork! 😮"
    },
    {
        id: uuid(),
        username: "music_man",
        comment: "What's the name of this song? It's stuck in my head!"
    },
    {
        id: uuid(),
        username: "fashionista_emily",
        comment: "That outfit is stunning! Where did you get it?"
    },
    {
        id: uuid(),
        username: "nature_enthusiast",
        comment: "Nature's beauty never fails to mesmerize!"
    },
    {
        id: uuid(),
        username: "petlover_mark",
        comment: "Your pet is adorable! 🐶"
    }
];


app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    console.log(req.body);
    const {username,comment}= req.body;
    comments.push({id : uuid(),username,comment})
    res.redirect('/comments')
    // res.send("ITS WORKS!!!")
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show',{comment})
})













app.listen(3000, () => {
    console.log("ON PORT 3000");
})