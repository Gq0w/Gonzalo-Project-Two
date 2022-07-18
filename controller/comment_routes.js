const express = require('express')
const router = express.Router()
const News = require('../models/news')


router.get('/comment', (req, res) => {
    res.render('/comment.liquid')
})




module.exports = router
