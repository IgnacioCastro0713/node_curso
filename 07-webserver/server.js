const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));
//Express hbs

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Ignacio'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(8080, () => {
    console.log('Port 8080 working');
});