const mongoose = require('mongoose');

const interventionSchema = mongoose.Schema({
    date: {
        type: Date,
        default: new Date
    },
    street: {
        type: String
    },
    number: {
        type: String
    },
    entrance: {
        type: String
    },
    appartment: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
})