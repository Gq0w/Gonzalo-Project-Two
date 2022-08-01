require('dotenv').config()
const express = require('express')
// const { findById } = require('../models/news')
const router = express.Router()
const News = require('../models/news')
const { $where } = require('../models/user')
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const Favs = require('../models/favorites')
const session = require('express-session')


/// Seed data, allow users to favorite, Comments maybe

// delete route
router.delete('/:id', (req, res) => {
    const favoriteId = req.params.id

    Favs.findByIdAndRemove(favoriteId)
        .then(favorites => {
            res.redirect('/thenews/favorites')
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/', async (req, res) => {
    await News.find({}) 
        .then(news => {
            // console.log(news[0]._id)
            res.render('thenews/index', {news})
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})


router.get('/favorites', (req, res) => {
    // find the fruits associated with the logged in user
    Favs.find({ owner: req.session.userId })
        .then(favorites => {
            console.log(favorites, "new console log")
            res.render('thenews/favorites', {favorites})
            // console.log(favorites)
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

// seed endpoint
// router.get('/SeedNews', (req, res) => {
//     // starting data
//     const startNews = [
//         {
//             "id": "a993a2fc-732e-4b10-b3c3-5ad47bac9a05",
//             "title": "Dewan Rakyat passes two bills related to court",
//             "description": "Parliament, Dewan Rakyat, Courts of Judicature, bi",
//             "url": "http://www.bernama.com/en/news.php?id=2103830",
//             "author": "bernama",
//             "image": "https://www.bernama.com/storage/photos/4f3ce435704fccf415de7b9a04e9607e62dea2e506e0d-medium",
//             "language": "en",
//             "category": [
//             "regional"
//             ],
//             "published": "2022-07-25 22:16:23 +0000"
//             }
// ]
// })


// create news / update news
router.get('/new', (req, res) => {
    res.render('thenews/new')
})

// POST - Create
router.post('/', (req, res) => {

    News.create(req.body)
        .then(news => {
            // res.json(fruit)
            res.redirect('/thenews')
        })
        .catch(err => {
            res.json(err)
        })
})


// show route
router.get('/:id', (req, res) => {
    const favoriteId = req.params.id
    console.log(favoriteId)
    Favs.findById(favoriteId)
        // send back some json
        .then(favorites => {
            console.log("my favorite console log",favorites)
            // res.json(fruit)
            res.render('thenews/show', { favorites })
        })
        .catch(err => {
            res.json(err)
        })
})


// my favorites 
router.post('/:id', (req, res) => {
    req.body.owner = req.session.userId
     console.log(req.body, "here")
         Favs.create(req.body)
             .then(favorites => {
                 res.redirect('/thenews/favorites')
               })
             .catch(err => {
                 res.json(err)
             })
})






































// my index
// router.get('/', (req, res) => {
//     console.log("inside index route")
//     // const APIrequestUrl = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
//     // fetch(APIrequestUrl)
//     .then(res => res.json())
//     // doesnt post like it should
//     // .then(data => {
//     //     req.session.news = {
//     //         title: data.news.title,
//     //         description: data.news.description,
//     //         image: data.news.img
//     //     }
//     // })
//     .then(data => {
//         // News.insertMany(data)
//         // console.log(data)
//         res.render('thenews/index.liquid', {data: data})
//     })
//     .catch(err => {
//         console.log(err)
//         res.json(err)
//     })
// })

// router.get('/favorites', (req, res) => {
//     res.render('thenews/favorites.liquid')
// })


// // my favorites 
// router.post('/favorites/:id', (req, res) => {
//     req.body.owner = req.session.userId
//      console.log(req.session.news)
//         //  Favs.create(req.body)
//         //      .then(favorites => {
//         //          console.log(favorites)
//         //          res.redirect('/thenews/favorites')
//         //        })
//         //      .catch(err => {
//         //          res.json(err)
//         //      })
// })


// figure out a way to specify which article i want to select 
// User clicks on a title page and is sent to the relavent data that is related to that id

// my show
// router.get('/show', (req, res) => {
//     console.log("inside show route")
//     // const APIrequestUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9`
//     // findById()
//     // fetch(APIrequestUrl)
//         // .then(apiResponse => apiResponse.json()) // single line arrow functions implicitly return
//         // .then(json => console.log(json)) // this waits until we actually get the json to try to see it
//         .then(data => {
//             //News.insertMany(data)
//             console.log(`in show route after show request and sort`, data.news)
//             res.render(`thenews/show`, {data: data})
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })





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

