import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-requests.adapter'
import { createGetProductsController } from '../../factories/controllers/products/get-products-controller.factory'

export default (router: Router): void => {
  router.get('/products', adaptRoute(createGetProductsController()))
}
