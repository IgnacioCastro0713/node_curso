require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const mongoose = require('mongoose');

//Midlewares
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//Routes
app.use(require('../routes/user'));


//mongo db connection
mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true}, (err, res) => {

    if (err) throw err

    console.log('Connect to database');

});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Port
app.listen(process.env.PORT, () => {
    console.log('Port 3000 working');
});