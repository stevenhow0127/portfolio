const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/router')

const app = express()

app
    .use('/public/', express.static(path.join(__dirname, './public/')))
    .use('/node_modules/', express.static(path.join(__dirname, '../node_modules/')))
    .use('/assets/', express.static(path.join(__dirname, './assets')))
    .use('/img/', express.static(path.join(__dirname, './img')))

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    
    .use(router)

app.engine('html', require('express-art-template'))

app.listen(80, () => {
    console.log('App server is running...')
})
