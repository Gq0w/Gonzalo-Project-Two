const express = require('express')
const router = express.Router()
const News = require('../models/news')


router.get('/', (req, res) => {
    res.render('views/comment.liquid')
})




module.exports = router
