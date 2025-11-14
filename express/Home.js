
const express = require('express')

const app = express()

app.get('/index', (req, res) => {
   
    res.render('Home', { student })
})

app.listen(3010, () => {
    console.log('server listen')
})  