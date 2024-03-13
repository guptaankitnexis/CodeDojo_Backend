const express = require("express");
const app = express();

/* Middleware */
// app.use((req,res)=>{
//     console.log("we gota new request");
//     console.log(req);
//     res.send("Hello , we got your request! ")
//     res.send({color: 'red'})// sending object
//     res.send('<h1>This is my webpage</h1>')// it will render in browser as h1
// }) 

// Routing
// /cats => 'meow'
// /dogs = 'woof'

// Home route
app.get('/',(req,res)=>{
    res.send("This is my home page");
});

app.get('/cats',(req,res)=>{
    console.log("Cats request");
    res.send('MEOW!!');
});

app.get('/dogs',(req,res)=>{
    console.log("Dogs request");
    res.send('WOOF!!');
});

app.post('/cats',(req,res)=>{
    res.send('POST REQUEST TO /cats !! This is different than a  /get request');
})

// generic response 
// app.get('*',(req,res)=>{
//     res.send("I don't know that path")
// })

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}= req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);

})

//  /r/something/something
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}= req.params;
    res.send(`<h1>Viewing the ${postId}  on the ${subreddit} subreddit</h1>`);

})

app.get('/search',(req,res)=>{
    const {q}= req.query;
    if(!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1> Search result for ${q}</h1>`)
    res.send("HI") //one responce PER one request so it will not work
})

app.listen(3000 , ()=>{
    console.log("LISTENING ON PORT 3000");
});
