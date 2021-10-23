import { GetProductsController } from '../../../../presentation/controllers/get-products-controller'
import { Controller } from '../../../../presentation/interfaces'

export const createGetProductsController = (): Controller => {
  return new GetProductsController()
}
