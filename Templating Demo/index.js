const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

// Serve static files from the public directory  
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true })) 

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))


app.get('/',(req,res)=>{
    // console.log("hi");
    res.render('home.ejs')
})

app.get('/tacos',(req,res)=>{
    console.log(req.body);
    // res.send("----")
})
app.post('/tacos',(req,res)=>{
    console.log(req.body);
    // res.render(index.html)
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('random',{rand:num})
})

app.get('/cats',(req,res)=>{
    const cats =['Blue','Rocket','Monty','Stephanie','Winston']
    res.render('cats',{cats})
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data = redditData[subreddit]
    // console.log(req.params); { subreddit: 'soccer' }
    // console.log(subreddit);  soccer
    // console.log(redditData); redditData contains the  same thing that is in data.json file
    // console.log(data); it contains an one layer deep nested object
    if(data){
        res.render('subreddit.ejs',{...data})
    }
    else{
        res.render('notfound', { subreddit})
    }
})

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
})