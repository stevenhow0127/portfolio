const express = require('express')
//載入加密module
const md5 = require('blueimp-md5')
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
