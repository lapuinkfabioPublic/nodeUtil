import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createServer } from 'http'

const app = express()
const server = createServer(app)

app.use(cors())
app.use(bodyParser.json())

export { server }