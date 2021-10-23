import { Express, Router } from 'express'
import fastGlob from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  const files = fastGlob.sync('**/src/main/router/routes/**.route.ts')
  files.map(async (file: string) => {
    const route = (await import(`../../../${file}`)).default
    route(router)
  })
}
