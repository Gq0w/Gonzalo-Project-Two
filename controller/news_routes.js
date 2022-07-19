const express = require('express')
const { findById } = require('../models/news')
const router = express.Router()
const News = require('../models/news')
const { $where } = require('../models/user')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))





router.get('/', (req, res) => {
    console.log("inside index route")
    const APIrequestUrl = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
    fetch(APIrequestUrl)
    .then(res => res.json())
    .then(data => {
        News.insertMany(data)
        // console.log(data)
        res.render('thenews/index.liquid', {data: data})
    })
    .catch(err => {
        res.json(err)
    })
})


// figure out a way to specify which article i want to select 
// User clicks on a title page and is sent to the relavent data that is related to that id

router.get('/show/:id', (req, res) => {
    console.log("inside show route")
    const APIrequestUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9`
    findById()
        .then(apiResponse => apiResponse.json()) // single line arrow functions implicitly return
        .then(json => console.log(json)) // this waits until we actually get the json to try to see it
        .then(storyArray => storyArray.find(singleStory => singleStory.id === req.params.id)) 
        .then(data => {
            News.insertMany(data)
            console.log(data,`in show route after show request and sort`)
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








router.get('/', (req, res) => {
    res.render('thenews/index')
})







// https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9

module.exports = router

