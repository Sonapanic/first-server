'use strict'

let http = require('http')
let port = process.env.PORT || 8000

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})


server.listen(port, () => {
    console.log('Listening on port', port)
})