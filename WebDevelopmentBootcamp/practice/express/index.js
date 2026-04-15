const express = require('express');
const app = express();

// app.use((req, res) =>{
//     console.log('We got a new request!');
//     res.send({color: 'red', food: 'banana'});
// });

app.get('/cats', (req, res) =>{
    res.send('MEOW');
});

app.post('/cats', (req, res) =>{
    res.send('POST REQUEST TO /cats!! THIS IS DIFFERENT THAN GET');
});



app.get('/dogs', (req, res) =>{
    res.send('WOOOF');
});

app.get('/', (req, res) =>{
    res.send('This is the home page');
});

app.get('/r/:subreddit/:postId', (req, res) =>{
    const {subreddit, postId} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1><h2>Viewing post ID: ${postId}</h2>`);
});

app.get('/search', (req, res) =>{
    const {q} = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched');
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`);
    }
});

app.use((req, res) =>{
    res.status(404).send('Not Found');
});



app.listen(3000, () =>{
    console.log('Listening on port 3000');
});