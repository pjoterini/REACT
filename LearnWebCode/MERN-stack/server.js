const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('sup')
})

app.get('/admin', (req, res) => {
    res.send('admin page')
})

app.listen(3000) 