const mongosse = require('mongoose');
const validator = require('validator');

var User = mongosse.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator:validator.isEmail,
            message: '{value} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        min 
    }
});

module.exports = {
    User
};