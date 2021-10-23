import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../presentation/interfaces'

export const expressRequestAdapter = (controller: Controller): Function => {
  return async (request: Request, response: Response): Promise<void> => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const { statusCode, data } = await controller.handle(httpRequest)

    response.status(statusCode).json(data)
  }
}
