const mongoose = require('./connection')


const { Schema, model } = mongoose

// make user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// make a user model with the userSchema
const User = model('user', userSchema)



module.exports = User