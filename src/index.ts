import express from 'express'
import mongoose from 'mongoose'
import {json} from 'body-parser'

import { authRouter } from './routes/auth'

const app = express()

const port = process.env.PORT || 5000

app.use(json())
app.use(authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:root@cluster0.uekbc.mongodb.net/test?retryWrites=true&w=majority')
        app.listen(port, () => console.log(`Server started on port: ${port}`))
    } catch(error) {
        console.log(error)
    }
}
start()
