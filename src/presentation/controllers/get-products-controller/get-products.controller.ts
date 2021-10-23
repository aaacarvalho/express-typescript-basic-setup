import { Controller, HttpResponse } from '../../interfaces'

export class GetProductsController implements Controller {
  async handle (): Promise<HttpResponse> {
    return {
      data: [],
      statusCode: 200
    }
  }
}
