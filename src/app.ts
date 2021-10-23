import express from 'express'
import setMiddlewares from './main/middlewares'
import setRoutes from './main/router'

const app = express()

setMiddlewares(app)
setRoutes(app)

app.listen(3000)
