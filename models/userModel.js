const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    position: {
        type: String,
        // required: 'Name is required'
    },
    email: {
        type: String,
        // required: 'Email is required'
    },
    //da se dodade shema za password!
    password: {
        type: String,
        // required: 'Password is required'
    },
    confirmPassword: {
        type: String,
        // required: 'Confirm your password is required'
    }
})

module.exports = mongoose.model('User', userSchema);