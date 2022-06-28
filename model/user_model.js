const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)