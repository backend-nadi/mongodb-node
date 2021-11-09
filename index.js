require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const http = require('http')

const {MONGO_URL} = process.env
mongoose.connect(`${MONGO_URL}`)

const userRouter = require('./app/route/user')
const productRouter = require('./app/route/product')
const postRouter = require('./app/route/posts')
const showRouter = require('./app/route/show')

const app = express()
const server = http.createServer(app)
const PORT = 1919

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/product', productRouter)
app.use('/user', userRouter)
app.use('/posts', postRouter)
app.use('/show', showRouter)





server.listen(PORT, () => console.log(`listen to port http://localhost:${PORT}`))