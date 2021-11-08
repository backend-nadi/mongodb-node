require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const http = require('http')



const app = express()
const server = http.createServer(app)
const PORT = 1919



server.listen(PORT, () => console.log(`listen to port http://localhost:${PORT}`))