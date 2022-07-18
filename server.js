require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const thenewsRoutes = require('./controller/news_routes')
const userRoutes = require('./controller/user_routes')
const commentRoutes = require('./controller/comment_routes')

const app = require('liquid-express-views')(express())

// Middleware
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require('connect-mongo')


// here's the middleware that sets up our sessions
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

// Routes
app.use('/thenews', thenewsRoutes)
app.use('/users', userRoutes)
//app.use('/comments', commentRoutes)









app.get('/', (req, res) => {
	res.redirect('/thenews')
})


// Server Listener
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})