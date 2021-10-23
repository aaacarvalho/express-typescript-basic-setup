import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../presentation/interfaces'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const { statusCode, data } = await controller.handle(httpRequest)

    response.status(statusCode).json(data)
  }
}
