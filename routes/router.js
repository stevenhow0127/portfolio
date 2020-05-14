const express = require('express')
const app = express()
const router = express.Router()

router
    .get('/layer', (req, res) => {
        res.render('layer.html')
    })

    .get('/calculate', (req, res) => {
        res.render('calculate.html')
    })

module.exports = router
