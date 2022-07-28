const mongoose = require('./connection')
const { Schema, model } = mongoose

const favSchema = new Schema(
    {
        author: String,
        description: String,
        title: String,
        published: String,
        url: String,
        image: String,

        owner: {
            type: Schema.Types.ObjectId, // a single User ._id
            ref: 'User' // const User = model('User', userSchema) the string of 'User' is how we reference a model
        }
    }
    
)


const Favs = model('favorites', favSchema)
module.exports = Favs

// _id: ObjectId("62d6004787ca520b92fa8e91") use this to find our data
