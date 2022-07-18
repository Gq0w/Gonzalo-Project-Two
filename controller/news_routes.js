const express = require('express')
const router = express.Router()
const News = require('../models/news')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))





router.get('/', (req, res) => {
    console.log("inside index route")
    const APIrequestUrl = "https://api.currentsapi.services/v1/latest-news?apiKey=pVeA35DOYWfZRJTUsDTw8UvEgllsYM2tB8kfGhKjJfd_Xrv9"
    fetch(APIrequestUrl)
    .then(res => res.json())
    .then(data => {
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
    fetch(APIrequestUrl)
        .then(temp=>{
            console.log(temp.json())
            return temp 
        })
        .then(response => response.json())
        .then(storyArray => storyArray.find(singleStory => singleStory.id === req.params.id)) 
        .then(data => {
            console.log(data,`in show route after show request and sort`)
            res.render(`thenews/show/${req.params.id}`, {data: data})
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

