const express = require('express')
const app = express();
const morgan = require('morgan');

app.use((req, res, next) => {
    req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
})
app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!!");
    next();
})
app.use((req,res,next)=>{
    const { password }=req.query;
    if(password === 'paneer'){
        next();
    }
    res.send('SORRY ! YOU NEED A PASSWORD!')
})

const verifyPassword = (req,res,next)=>{
    const { password } = req.query;
    if(password === 'paneer'){
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!')
}

// app.use(morgan('tiny'))
// app.use((req,res,next) =>{
//     console.log("This is my first Middeleware!");
//      return next();
// })
// app.use((req,res,next) =>{
//     console.log("This is my second Middeleware!");
//     next();
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!')
})
app.get('/dogs', (req, res) => {
    res.send('WOOf !')
})

app.get('/sefcret',verifyPassword,(req,res) =>{
    res.send('MY SECRET IS : sometimes I wear headphones in public')
})

app.use((req, res) => {
    res.status(404).send = 'NOT FOUND!';
})

app.listen(3000, () => {
    console.log('App is running on localhost : 3000');
})