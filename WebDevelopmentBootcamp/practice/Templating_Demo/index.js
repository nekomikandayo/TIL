const path = require('path');
const express = require('express');
const app = express();
const redditData = require('./data.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (!data) {
        res.render('notfound', {subreddit});
    }else{
        res.render('subreddit', {...data});
    }
    
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand:num});
});

app.get('/cats', (req, res) => {
    const cats = [
        'Blue',
        'Rocket',
        'Monty',
        'Stephanie',
        'Winston'
    ];
    res.render('cats', {cats});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

