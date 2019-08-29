const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');


let enumRole = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Correo requerido']
    },
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: enumRole
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.toJSON = function() {

    let current = this;

    let user = current.toObject();

    delete user.password;

    return user;
}

userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('User', userSchema);