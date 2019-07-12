require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json({
        name: 'Ignacio'
    });
});

app.post('/user', (req, res) => {

    let body = req.body

    if (body.name === undefined) {

        res.status(400).json({
            ok: false,
            message: 'EL nombre es necesario'
        })

    } else {

        res.json({
            body
        });
    }




});

app.put('/user/:id', (req, res) => {

    let id = req.param.id;

    console.json('put user');
});

app.delete('/user', (req, res) => {
    console.json('delete user');
});

app.listen(process.env.PORT, () => {
    console.log('Port 8080 working');
});