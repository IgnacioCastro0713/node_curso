const express = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const _ = require('underscore');


const app = express();


app.get('/user', (req, res) => {
    
    let since = Number(req.query.since) || 0;

    let limit = Number(req.query.limit) || 5;
    
    User.find({status: true}, 'name email role status google')
    .skip(since)
    .limit(limit)
    .exec((err, users) => {
       
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }


        let total = users.length;

        res.json({
            ok: true,
            total,
            users
        });

    });
});

app.post('/user', (req, res) => {

    let body = req.body

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcryptjs.hashSync(body.password, 10),
        role: body.role
    });

    user.save((err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });

    });


});

app.put('/user/:id', (req, res) => {

    let id = req.param.id;

    let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);

    User.findOneAndUpdate(id, body, {new: true, runValidators: true, context: 'query'}, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });

    });

});

app.delete('/user/:id', (req, res) => {
    
    let id = req.params.id;

    // User.findByIdAndRemove(id, (err, userDB) => { // para borrado físico de la base de datos


    let changeStatus = {
        status: false
    }

    User.findByIdAndUpdate(id, changeStatus, {new: true}, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            user: userDB
        })

    });

});


module.exports = app;