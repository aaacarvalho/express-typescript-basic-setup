import { Express } from 'express'
import { bodyParser } from './body-parser.middleware'
import { contentType } from './content-type.middleware'
import { cors } from './cors.middleware'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(contentType)
  app.use(cors)
}
