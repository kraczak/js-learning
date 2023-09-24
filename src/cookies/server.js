const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/set-cookie', (req, res) => {
    res.json({lol: 'lol'});
});

app.listen(port, () => {
    console.log(`server hosted on http://localhost:${port}`);
});