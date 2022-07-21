// requiring dotenv 
require('dotenv').config()
// getting mongoose to use
const mongoose = require('mongoose')


const DATABASE_URI = process.env.DATABASE_URI
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}



// connecting to mongoose
mongoose.connect(DATABASE_URI, config)

mongoose.connection.on('connected', () => {
	console.log(
		`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`
	)
})

mongoose.connection.on('error', (err) => {
	console.log('Could not connect to MongoDB!', err)
})

// mongoose.connection
//     .on('open', () => console.log('Connected to Mongoose'))
//     .on('close', () => console.log('Disconnected from Mongoose'))
//     .on('error', err => console.error(err))

module.exports = mongoose