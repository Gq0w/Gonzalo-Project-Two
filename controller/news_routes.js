require('dotenv').config()
const express = require('express')
const { findById } = require('../models/news')
const router = express.Router()
const News = require('../models/news')
const { $where } = require('../models/user')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const Favs = require('../models/favorites')
const session = require('express-session')


/// Seed data, allow users to favorite, Comments maybe


// my index
router.get('/', (req, res) => {
    console.log("inside index route")
    const APIrequestUrl = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
    fetch(APIrequestUrl)
    .then(res => res.json())
    // doesnt post like it should
    // .then(data => {
    //     req.session.news = {
    //         title: data.news.title,
    //         description: data.news.description,
    //         image: data.news.img
    //     }
    // })
    .then(data => {
        News.insertMany(data)
        // console.log(data)
        res.render('thenews/index.liquid', {data: data})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.get('/favorites', (req, res) => {
    res.render('thenews/favorites.liquid')
})


// my favorites 
router.post('/favorites/:id', (req, res) => {
    req.body.owner = req.session.userId
     console.log(req.session.news)
        //  Favs.create(req.body)
        //      .then(favorites => {
        //          console.log(favorites)
        //          res.redirect('/thenews/favorites')
        //        })
        //      .catch(err => {
        //          res.json(err)
        //      })
})


// figure out a way to specify which article i want to select 
// User clicks on a title page and is sent to the relavent data that is related to that id

// my show
router.get('/show', (req, res) => {
    console.log("inside show route")
    const APIrequestUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9`
    // findById()
    fetch(APIrequestUrl)
        .then(apiResponse => apiResponse.json()) // single line arrow functions implicitly return
        // .then(json => console.log(json)) // this waits until we actually get the json to try to see it
        .then(data => {
            //News.insertMany(data)
            console.log(`in show route after show request and sort`, data.news)
            res.render(`thenews/show`, {data: data})
        })
        .catch(err => {
            res.json(err)
        })
})





/// use stackoverflow, on fetch req make a schema then push to database



// router.post('/show', (req, res) => {
//     const myAPI = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
//     fetch(myAPI)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data, "my data")
        
//     })
// })

// GIT PUSH HEROKU MAIN



// https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9

module.exports = router

