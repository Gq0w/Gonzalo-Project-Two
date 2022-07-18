const express = require('express')
const router = express.Router()
const News = require('../models/news')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))



router.get('/show', (req, res) => {
    console.log("inside show route")
    const APIrequestUrl = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
    fetch(APIrequestUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        res.render('thenews/show.liquid', {data: data})
    })
    .catch(err => {
        res.json(err)
    })
})








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

